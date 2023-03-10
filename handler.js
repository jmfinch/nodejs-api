const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const { InMemoryDatabase  } = require('in-memory-database');

const handler = express();
const client = new InMemoryDatabase();

handler.set('client', client);
//console.log(client.keys());

const deviceRoutes = require('./handler/routes/device');
const unhandledRoutes = require('./handler/routes/unhandled');

handler.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
    if (req.method === 'OPTIONS'){
        res.header('Access-Contro-Allow-Methods', 'GET, POST')
        return res.status(200).json({});
    }
    next();
})

handler.use(bodyParser.urlencoded({extended: false}));
handler.use(bodyParser.json());

handler.use('/device', deviceRoutes);
handler.use(unhandledRoutes)

module.exports = handler;