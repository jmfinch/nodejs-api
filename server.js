const http = require('http');

const db = require('./model/sqlite3');

db = db.openDB();

const handler = require('./handler');

const port = process.env.PORT || 4300;

const server = http.createServer(handler)

server.listen(port);