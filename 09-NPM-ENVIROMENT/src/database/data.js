async function conectarDatabase(user, password){
    if(user === process.env.USER &&
       password === process.env.PASSWORD){
        console.log("conec autorizada");
    } else {
        console.log("conec não autorizada");
    }
}

export default conectarDatabase;