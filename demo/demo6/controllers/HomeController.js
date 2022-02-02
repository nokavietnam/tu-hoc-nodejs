const path = require('path');

const home = (req, res) => {
  res.header({ 'Content-Type': 'text/html' });
  console.error(__dirname);
  res.sendFile(
    path.join(path.dirname(require.main.filename), 'views', 'index.html')
  );
};

module.exports = {
  home,
};
