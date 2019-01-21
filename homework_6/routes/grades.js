var express = require('express');
var isJSON = require('is-json');
var router = express.Router({ strict: true, caseSensitive: true });



var data = [{ id: 1, name: 'Asaad saad', course: 'CS572', grade: 95 }]

router.get('/status', function (req, res, next) {
    res.send('respond with a resource');
});

router.all('/*', function (req, res, next) {
        console.log(`body type is JSON: ${isJSON(req.body, true)}`);
    return next();
});

router.get('/', function (req, res, next) {
    res.send(data);
});
router.get('/:id', function (req, res, next) {
    data.filter(e => {
        if (e.id == req.params.id) {
            res.send(e);
        }
    })
});
router.post('/', function (req, res, next) {
    if (req.body.length > 1) {
        var arr = [...data, ...req.body];
        data = arr;
    } else {
        data.push(req.body);

    }
    res.send(data);
});
router.put('/:id', function (req, res, next) {
    data.map(e => {
        if (e.id == req.params.id) {
            e.name = req.body.name || e.name;
            e.course = req.body.course || e.course;
            e.grade = req.body.grade || e.grade;
        }
    })
    res.send(data);
});
router.delete('/:id', function (req, res, next) {
    data.pop(req.params.id);
    res.send(data);
});

module.exports = router;
