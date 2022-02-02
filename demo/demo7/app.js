const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const newRouter = require('./src/routers/news');
app.use('/', newRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
