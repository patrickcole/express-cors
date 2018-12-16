const express = require('express');
const cors = require('cors');
const app = express();

let allowedOrigins = ['http://localhost:4200'];
var corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send();
});

app.get('/posts', (req, res) => {
  res.send([
    {
      id: 0,
      title: 'Lorem Ipsum',
      content: 'Dolor sit amet',
      author: 'Marcin'
    },
    {
      id: 1,
      title: 'Vestibulum cursus',
      content: 'Dante ut sapien mattis',
      author: 'Marcin'
    }
  ]);
});

app.listen(8080);