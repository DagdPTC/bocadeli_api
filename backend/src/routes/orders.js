import express from "express";
import orderController from "../controllers/ordersController.js";

const router = express.Router();

router
  .route("/")
  .get(orderController.getOrders)
  .post(orderController.createOrder);

router
  .route("/:id")
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);

export default router;
