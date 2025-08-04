import * as cartService from './services/cart.js';
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];


const item1 = await createItem("mouse", 20.99, 1);
const item2 = await createItem("teclado mecânico", 39.99, 3);

console.log("Welcome to your Shopee Cart!")

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//remover item
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

//deletar item
await cartService.deleteItem(myCart, item1.name);

// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

// exibi os itens do carrinho
await cartService.displayCart(myCart);

// calculei total de itens do carrinho
await cartService.calculateTotal(myCart);