const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  getEmployee,
  createNewEmployee,
} = require('../../controllers/employeeController');

router.route('/employees').get(getAllEmployees);
router.route('/employee').post(createNewEmployee);
router.route('/employee/:id').get(getEmployee);

module.exports = router;
