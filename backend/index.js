import app from "./app.js"
import "./database.js"
import { config } from "./src/config.js";

//Creamos la función
//Que se encarga de ejecutar el servidor
async function main() {
    app.listen("4000")
}

main();