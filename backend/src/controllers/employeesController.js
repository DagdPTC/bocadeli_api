const employeeController = {};

import employeeModel from "../models/employees.js";

//SELECT
employeeController.getEmployee = async (req, res) => {
  const employees = await employeeModel.find();
  res.json(employees);
};


//ELIMINAR
employeeController.deleteEmployee = async (req, res) => {
  await employeeModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};

//UPDATE
employeeController.updateEmployee = async (req, res) => {
  // Solicitamos los nuevo valores
  const { name, lastName, email, password, phone, address } =
    req.body;

  await employeeModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      lastName,
      email,
      password,
      phone,
      address,
    },
    { new: true },
  );

  res.json({ message: "Employee updated" });
};

export default employeeController;
