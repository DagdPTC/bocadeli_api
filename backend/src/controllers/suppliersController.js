const supplierController = {};

import supplierModel from "../models/suppliers.js";

// SELECT
supplierController.getSuppliers = async (req, res) => {
  const suppliers = await supplierModel.find();
  res.json(suppliers);
};

// INSERT (POST)
supplierController.createSupplier = async (req, res) => {
  const { name, company, email, phone, address, isActive } = req.body;

  const newSupplier = new supplierModel({
    name,
    company,
    email,
    phone,
    address,
    isActive,
  });

  await newSupplier.save();

  res.json({ message: "Supplier created" });
};

// ELIMINAR
supplierController.deleteSupplier = async (req, res) => {
  await supplierModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Supplier deleted" });
};

// UPDATE
supplierController.updateSupplier = async (req, res) => {
  const { name, company, email, phone, address, isActive } = req.body;

  await supplierModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      company,
      email,
      phone,
      address,
      isActive,
    },
    { new: true },
  );

  res.json({ message: "Supplier updated" });
};

export default supplierController;
