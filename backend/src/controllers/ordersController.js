const orderController = {};

import orderModel from "../models/orders.js";

// SELECT
orderController.getOrders = async (req, res) => {
  const orders = await orderModel
    .find()
    .populate("clientId")
    .populate("productsId");

  res.json(orders);
};

// INSERT
orderController.createOrder = async (req, res) => {
  const { clientId, productsId, total, status, date } = req.body;

  const newOrder = new orderModel({
    clientId,
    productsId,
    total,
    status,
    date,
  });

  await newOrder.save();

  res.json({ message: "Order created" });
};

// ELIMINAR
orderController.deleteOrder = async (req, res) => {
  await orderModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};

// UPDATE
orderController.updateOrder = async (req, res) => {
  const { clientId, productsId, total, status, date } = req.body;

  await orderModel.findByIdAndUpdate(
    req.params.id,
    {
      clientId,
      productsId,
      total,
      status,
      date,
    },
    { new: true },
  );

  res.json({ message: "Order updated" });
};

export default orderController;
