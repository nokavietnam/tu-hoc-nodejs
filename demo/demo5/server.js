const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 3500;

const whiteList = [
  'https://www.google.com',
  'http://127.0.0.1:5500',
  'http://localhost:3000',
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path}`);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use('/index(.html)?', (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/new-page(.html)?', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/*', (req, res) => {
  res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
