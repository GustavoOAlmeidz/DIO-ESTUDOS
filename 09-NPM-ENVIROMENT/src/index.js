import conectarDatabase from "./database/data.js";

async function main(){
    await conectarDatabase(process.env.USER,process.env.PASSWORD);
}

main();