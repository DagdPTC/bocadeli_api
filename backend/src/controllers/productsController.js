const productController = {};

import productModel from "../models/products.js";

// SELECT
productController.getProducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

// INSERT (POST) 🔥
productController.createProduct = async (req, res) => {
  const { name, description, price, stock, categoryId, isActive } = req.body;

  const newProduct = new productModel({
    name,
    description,
    price,
    stock,
    categoryId,
    isActive,
  });

  await newProduct.save();

  res.json({ message: "Product created" });
};

// ELIMINAR
productController.deleteProduct = async (req, res) => {
  await productModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

// UPDATE
productController.updateProduct = async (req, res) => {
  const { name, description, price, stock, categoryId, isActive } = req.body;

  await productModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      price,
      stock,
      categoryId,
      isActive,
    },
    { new: true },
  );

  res.json({ message: "Product updated" });
};

export default productController;
