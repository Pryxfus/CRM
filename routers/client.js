const express = require('express');

const clientRouter = express.Router();

clientRouter
  .get('/', (req, res) => {
    res.send('clientRouter is working');
});

module.exports = {
  clientRouter,
}