const categoryController = {};

import categoryModel from "../models/categories.js";

// SELECT
categoryController.getCategories = async (req, res) => {
  const categories = await categoryModel.find();
  res.json(categories);
};

// INSERT (POST)
categoryController.createCategory = async (req, res) => {
  const { name, description, isActive } = req.body;

  const newCategory = new categoryModel({
    name,
    description,
    isActive,
  });

  await newCategory.save();

  res.json({ message: "Category created" });
};

// ELIMINAR
categoryController.deleteCategory = async (req, res) => {
  await categoryModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
};

// UPDATE
categoryController.updateCategory = async (req, res) => {
  const { name, description, isActive } = req.body;

  await categoryModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      isActive,
    },
    { new: true },
  );

  res.json({ message: "Category updated" });
};

export default categoryController;
