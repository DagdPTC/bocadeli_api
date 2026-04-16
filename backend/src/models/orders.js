import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Customer", // referencia a customers
    },
    productsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product", // referencia a products
      },
    ],
    total: {
      type: Number,
    },
    status: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Order", orderSchema);
