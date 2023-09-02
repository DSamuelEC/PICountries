const express = require("express");
const server = express();
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use((req, res, next) => { //config del CORS
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
});

server.use('/', router);

module.exports = server;
