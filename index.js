const express = require('express');
const hbs = require('express-handlebars');
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');

const app = express();

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
app.get('/test', (req, res) => {
  // db.create({
  //   name: 'Test123',
  //   mail: 'abc@def.com'
  // });
  // res.send('OK');
  //
  // res.json(db.getAll());

  // db.update('574e7554-c35c-4fdc-bbc8-0b122a34214d', {
  //   name: 'Tester'
  // });
  res.send(db.getOne('574e7554-c35c-4fdc-bbc8-0b122a34214d').name);
});

app.listen(3000, 'localhost', () => {
  console.log('Listening on http://localhost:3000');
});