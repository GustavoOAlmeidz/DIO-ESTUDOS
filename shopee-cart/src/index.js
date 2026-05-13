import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

const item1 = await createItem("barbeador", 2, "1");
const item2 = await createItem("barbeador", 2.33, "3");




await cartService.addItem(myCart, item1)
await cartService.addItem(myWhishList, item2)
console.log(`total do meu carrinho`);
await cartService.calculateTotal(myCart);