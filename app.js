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

app.listen(8000, () => {
  console.log('Express listening on port 8000');
});

/*if (char === 90 || char === 122) {
        console.log('hi');
        const shiftNum = char - (24 + shift);
        newString += String.fromCharCode(shiftNum);
      } else {
        const shiftNum = char + shift;
        newString += String.fromCharCode(char + shift);
      }*/
