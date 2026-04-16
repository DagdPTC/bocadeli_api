import express from "express";
import cookieParser from "cookie-parser";

import customerRoutes from "./src/routes/customer.js";
import employeeRoutes from "./src/routes/employees.js";
import productRoutes from "./src/routes/products.js";
import categoryRoutes from "./src/routes/categories.js";
import ordersRoutes from "./src/routes/orders.js";
import supplierRoutes from "./src/routes/suppliers.js";
import registerEmployeeRoutes from "./src/routes/registerEmployees.js";
import registerCustomerRoutes from "./src/routes/registerCustomer.js";

const app = express();

app.use(cookieParser());

// Que acepte JSON desde postman
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/suppliers", supplierRoutes);

app.use("/api/registerEmployee", registerEmployeeRoutes);
app.use("/api/registerCustomer", registerCustomerRoutes);

export default app;
