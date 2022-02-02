const homepage = async (req, res) => {
  var users = [
    { id: 1, name: 'hello', age: 16 },
    { id: 2, name: 'hello 1', age: 20 },
    { id: 3, name: 'hello 2', age: 31 },
    { id: 4, name: 'hello 3', age: 25 },
    { id: 5, name: 'hello 4', age: 18 },
  ];

  var title = 'Home pages';

  res.render('pages/index', {
    title: title,
    users: users,
  });
};

module.exports = {
  homepage,
};
