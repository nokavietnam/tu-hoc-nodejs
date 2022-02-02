const express = require('express');
const path = require('path');
const app = express();
const mainRoute = require('./routers/root');
const apiRoute = require('./routers/api/employees');

const PORT = process.env.PORT || 3500;

app.use(mainRoute);
app.use('/api', apiRoute);

app.use(
  '/*',
  (req, res, next) => {
    console.log(`req: ${req.url}`);
    next();
  },
  (req, res) => {
    res.header({ 'Content-Type': 'text/html' });
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  }
);

app.listen(PORT, () => console.log(`Application running on port: ${PORT}`));
