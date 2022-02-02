const data = {
  employees: require('../data/employees.json'),
  setEmployees: (datas) => {
    this.employees = datas;
  },
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const getEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

const createNewEmployee = (req, res) => {
  res.json({
    name: req.body.name,
    age: req.body.age,
  });
};

module.exports = {
  getAllEmployees,
  getEmployee,
  createNewEmployee,
};
