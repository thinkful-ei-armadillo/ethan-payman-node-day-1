'use strict';

const express = require('express');

const app = express();

app.get('/sum', (req, res) => {
  const a = Number.parseInt(req.query.a, 10);
  const b = Number.parseInt(req.query.b, 10);

  res.send(`The sum of ${a} and ${b} is ${a + b}`);
});

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = parseInt(req.query.shift);

  let newString = '';

  for (let i = 0; i < text.length; i++) {
    let char = Number.parseInt(text.charCodeAt(i));
    let shiftNum = char;
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      shiftNum += shift;
      if ((shiftNum > 90 && shiftNum < 97) || shiftNum > 122) {
        shiftNum -= 26;
      }
    }
    newString += String.fromCharCode(shiftNum);
  }

  res.send('Ciphered Text: ' + newString);
});

app.get('/lotto', (req, res) => {

  const numbers = req.query.numbers.map((n) => { return Number.parseInt(n, 10); });

  if (numbers.length !== 6) {
    return res.status(400).send('You must provide 6 numbers');
  }

  let randomNumbers = [];
  for (let i = 0; i < 6; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 20) + 1;
  }

  const matches = numbers.filter((n) => {
    return randomNumbers.includes(n);
  });

  console.log(numbers, randomNumbers, matches);

  if (matches.length < 4) {
    return res.send('Sorry, you lose');
  }

  if (matches.length === 4) {
    return res.send('Congratulations, you win a free ticket');
  }

  if (matches.length === 5) {
    return res.send('Congratulations! You win $100!');
  }

  if (matches.length === 6) {
    return res.send('Wow! Unbelievable! You could have won the mega millions!');
  }

});

app.listen(8000, () => {
  console.log('Express listening on port 8000');
});
