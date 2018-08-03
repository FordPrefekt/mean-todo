const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if(err) console.log(err)
        console.log(result)
    })

    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
})


var db;

MongoClient.connect('mongodb://FordPrefekt:Revolution19021993@ds261088.mlab.com:61088/js_playground', (err, client) => {
    if (err) return console.log(err)
    db = client.db('js_playground')
    
    app.listen(8080, function() {
        console.log('listening on 3000')
    })
    
})