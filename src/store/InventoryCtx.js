import React from "react";

const InventoryCtx = React.createContext({
    inventory:[],
    carts: [],
    noofItemsincart:0,
    addInventory:()=>{},
    addToCart:()=>{},
    clearCart:()=>{},
    decreaseCart:()=>{}
})

export default InventoryCtx;