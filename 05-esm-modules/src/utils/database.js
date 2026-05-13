const databaseType= {
    userType:"ADMIN",
    typeData:"datalocal",
}


async function conectarNoBancoDeDados(dataName){
    console.log(`conectado no banco:${dataName}`);

}
async function disconectarDoBancoDeDados(){
    console.log('desconectando do banco');
}

export {
    conectarNoBancoDeDados,
    disconectarDoBancoDeDados,
    databaseType,
}