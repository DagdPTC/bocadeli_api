import mongoose, { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    salary: {
      type: Number,
    },
    phone: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Employee", employeeSchema);
