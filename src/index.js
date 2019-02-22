const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { Server } = require('http');
const socket = require('socket.io');

const app = express();
const server = Server(app);
const io = socket(server);

app.set('io', io);
app.use(cors());
app.use(helmet());
app.use(morgan(process.argv[2]));
app.use(express.json());
require('./app/routes')(app);

module.exports = app;
