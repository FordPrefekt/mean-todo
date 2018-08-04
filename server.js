const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();


app.use(bodyParser());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(res.data)
})

app.get('/get', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

app.post('/delete', (req, res) => {
    db.collection('quotes').deleteOne(req.body, (request, res) => {
        console.log(req.body, 'ONLY REQ')
    })
    console.log(res.json(req.body), "asdfasdfasdfasdf")
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