const MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();
const url = process.env.DB_HOST;

var app = express();
router.use(function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    if (err) {
      console.error('An error occurred connecting to MongoDB: ', err);
    }
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.DB_COLLECTION);
    req.collection = collection;
    req.db = db;
    req.client = client;
    return next();
  });
})


router.get('/', function (req, res, next) {
  req.collection.find({}).toArray(function (err, result) {
    if (err) throw err;
    res.send(result);
    console.log(result);
    req.client.close();
  })
});

router.post('/', function (req, res, next) {
  const doc = {
    'name': req.body.name,
    'category': req.body.category,
    'location': [parseFloat(req.body.long), parseFloat(req.body.lat)]
};

  req.collection.insertOne(doc, function (err, result) {
    if (err) throw err;
    console.log("document inserted");
    req.client.close();
    res.send("document inserted");
    res.end();
  })
})

router.post('/search', function (req, res, next) {
  const name = req.body.name;
  const category = req.body.category;
  const longitude = parseFloat(req.body.long);
  const latitude = parseFloat(req.body.lat);
  const collection = req.collection;

  collection.createIndex({'location': '2d'});
  collection.find({
      $and: [
          {'location': {$near: [longitude, latitude]}},
          // {'name': {$regex: name, $options: 'i'}},
          {'category': {$regex: category, $options: 'i'}}
      ]
  }).limit(3).toArray(function (err, dataArray) {
      res.setHeader('Content-Type', 'application/json');
      res.send(dataArray);
      console.log(dataArray);
  });

});

module.exports = router;