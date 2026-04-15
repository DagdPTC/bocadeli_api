import express from "express"
import cookieParser from "cookie-parser"

import customerRoutes from "./src/routes/customer.js"
import registerCustomerRoutes from "./src/routes/registerCustomer.js"

const app = express();

app.use(cookieParser());

// Que acepte JSON desde postman
app.use(express.json());

app.use("/api/customers", customerRoutes);

app.use("/api/registerCustomer", registerCustomerRoutes);

export default app;