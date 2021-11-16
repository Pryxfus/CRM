const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine( '.hbs', hbs({
    extname: '.hbs',
    // helpers: handlebarsHelper, // zakomentowane bo prawdopodobnie helpery nie będą używane
  })
);
app.set("view engine", "hbs");

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, 'localhost', () => {
  console.log('Listening on http://localhost:3000');
});
