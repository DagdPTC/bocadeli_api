const employeeController = {};

import employeeModel from "../models/employees.js";

// SELECT
employeeController.getEmployees = async (req, res) => {
  const employees = await employeeModel.find();
  res.json(employees);
};

// ELIMINAR
employeeController.deleteEmployee = async (req, res) => {
  await employeeModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};

// UPDATE
employeeController.updateEmployee = async (req, res) => {
  const { name, lastName, email, password, role, salary, phone, isVerified } =
    req.body;

  await employeeModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      lastName,
      email,
      password,
      role,
      salary,
      phone,
      isVerified,
    },
    { new: true },
  );

  res.json({ message: "Employee updated" });
};

export default employeeController;
