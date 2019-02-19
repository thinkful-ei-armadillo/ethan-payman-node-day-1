'use strict';

const express = require('express');

const app = express();

app.get('/sum', (req, res) => {

  const a = Number.parseInt(req.query.a, 10);
  const b = Number.parseInt(req.query.b, 10);

  res.send(`The sum of ${a} and ${b} is ${(a+b)}`);
});

app.listen(8000, () => {
  console.log('Express listening on port 8000');
});
