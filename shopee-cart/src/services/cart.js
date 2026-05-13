

// adicionar,
async function addItem(userCart, item){
    userCart.push(item);
}
// remover
async function removeItem(userCart, index){
}
// deletar
async function deleteItem(userCart, name){
}
// total
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item)=> total + item.subTotal(), 0);
    console.log(result);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}