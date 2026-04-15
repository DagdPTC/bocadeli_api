import express from "express"
import cookieParser from "cookie-parser"

import employeeRoutes from "./src/routes/employee.js"
import registerEmployeeRoutes from "./src/routes/registerEmployee.js"



const app = express();

app.use(cookieParser());

//Que acepte JSON desde postman
app.use(express.json());


app.use("/api/employees", employeeRoutes);

app.use("/api/registerEmployee", registerEmployeeRoutes)

export default app;