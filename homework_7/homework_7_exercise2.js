/*
* @Author: Administrator
* @Date:   2019-01-22 21:35:59
* @Last Modified by:   Administrator
* @Last Modified time: 2019-01-22 23:21:32
*/

const express = require('express');
const crypto = require('crypto');
var app = express();
const MongoClient = require('mongodb').MongoClient;

//create routes
app.get('/secret',(req,res)=>{
const client = new MongoClient('mongodb://127.0.0.1:27017/homework');
client.connect(function(err){
    const db = client.db('homework');
    const collection = db.collection('homework7');
    console.log(collection.findOne());
     if(err) throw err;

     collection.findOne({}, (err,data)=>{
        if(err) throw err;
        var message = data .message;
         var decipher = crypto.createDecipher('aes-256-cbc', "asaadsaad");
        var decrypted = decipher.update(message, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        res.send(decrypted);
     })

})
});

//middleware

// app.post('/secret',(req,res)=>{
//     console.log("Welcome to post");
//     res.send('bbb');
// });
//creating port
app.listen(9090);
