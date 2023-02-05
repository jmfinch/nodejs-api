const express = require('express');
const res = require('express/lib/response');
const handler = express();

const deviceRoutes = require('./handler/routes/device');
const unhandledRoutes = require('./handler/routes/unhandled');

handler.use('/device', deviceRoutes);

handler.use('/', unhandledRoutes)

module.exports = handler;