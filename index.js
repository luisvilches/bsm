const express = require('express');
const app = express();

const cors = require('cors');
const { port, mlab } = require('./settings');
const mongoose = require('mongoose');
const body = require('connect-multiparty')();
const { auth } = require('./middlewares/Auth');
const routesPublic = require('./routes/public');
const routesPrivate = require('./routes/private');
mongoose.Promise = global.Promise;

app.use(cors());
app.use('/', body, routesPublic);
app.use('/', body, auth, routesPrivate);

mongoose.connect(mlab, err => err ? console.log(err) : console.log('db success'));
app.listen(port, err => err ? console.log(err) : console.log('running success'));