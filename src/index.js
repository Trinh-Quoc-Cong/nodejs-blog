const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();

const port = 3000;
// import { create } from 'express-handlebars';

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('combined'));
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log(__dirname);

// Home , search , contact  // file Site

// route init
route(app);
// get định nghĩa route

// localhost 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
