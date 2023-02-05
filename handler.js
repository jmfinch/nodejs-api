const express = require('express');
const res = require('express/lib/response');
const handler = express();
const bodyParser = require('body-parser');

const deviceRoutes = require('./handler/routes/device');
const unhandledRoutes = require('./handler/routes/unhandled');

handler.use(bodyParser.urlencoded({extended: false}));
handler.use(bodyParser.json());

handler.use('/device', deviceRoutes);
handler.use(unhandledRoutes)

module.exports = handler;