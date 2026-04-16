import express from "express";
import supplierController from "../controllers/suppliersController.js";

const router = express.Router();

router
  .route("/")
  .get(supplierController.getSuppliers)
  .post(supplierController.createSupplier);

router
  .route("/:id")
  .put(supplierController.updateSupplier)
  .delete(supplierController.deleteSupplier);

export default router;
