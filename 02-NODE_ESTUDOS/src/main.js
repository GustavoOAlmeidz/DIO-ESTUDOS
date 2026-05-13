const p = require("./services/products");
const config = require("./services/config")
async function main(){
    // console.log("COD--NOME");
    // p.getFullName("500", "Gustavo");
    // p.getFullName("501","Jeferson");

    console.log(config.production)
}

main();