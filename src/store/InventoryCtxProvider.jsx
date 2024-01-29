import { useReducer } from "react"
import InventoryCtx from "./inventoryCtx"

const defaultState = {
    inventory: [],
    carts: [],
    noofItemsincart: 0
}

const inventoryReducer = (state, action) => {
    if (action.type === 'Add') {
        let updatedInv = state.inventory.concat(action.item)
        return {
            inventory: updatedInv,
            carts: state.carts,
            noofItemsincart: state.noofItemsincart
        }
    }
    if (action.type === 'decreaseCart') {
        const isExistIndex = state.carts.findIndex(c => c.id === action.id)
        const existCart = state.carts[isExistIndex]
        let decreaseItem = state.noofItemsincart - 1
        let updatedCart;
        if (existCart) {
            if(existCart.quantity > 1){
                let update = { ...existCart, quantity: existCart.quantity - 1 }
                updatedCart = [...state.carts]
                updatedCart[isExistIndex] = update
            }else{
                updatedCart = state.carts.filter(c=>c.id !== action.id)
            }
        } 

        return {
            inventory: state.inventory,
            carts: updatedCart,
            noofItemsincart: decreaseItem
        }
    }
    if (action.type === 'clearCart') {
        let cart = [...state.carts]
        console.log('Thanks for Purchase',cart)
        cart = []

        return {
            inventory: state.inventory,
            carts: cart,
            noofItemsincart: state.noofItemsincart
        }
    }

    if (action.type === 'AddtoCart') {
        const isExistIndex = state.carts.findIndex(c => c.id === action.id)
        const existCart = state.carts[isExistIndex]
        let increaseItem = state.noofItemsincart + 1
        let updatedCart;
        if (existCart) {
            let update = { ...existCart, quantity: existCart.quantity + 1 }
            updatedCart = [...state.carts]
            updatedCart[isExistIndex] = update
        } else {
            const itemIndex = state.inventory.findIndex(i => i.id === action.id)
            const item = state.inventory[itemIndex]
            updatedCart = state.carts.concat(item)
        }

        return {
            inventory: state.inventory,
            carts: updatedCart,
            noofItemsincart: increaseItem
        }
    }
}

const InventoryCtxProvider = (props) => {
    const [inventorystate, dispatch] = useReducer(inventoryReducer, defaultState)

    const addtoInventoryHandler = (item) => {
        dispatch({ type: 'Add', item: item })
    }

    const addtoCartHandler = (id) => {
        dispatch({ type: 'AddtoCart', id: id })
    }

    const decreaseCartHandler = (id) => {
        dispatch({ type: 'decreaseCart', id: id })
    }

    const clearCartHandler = () => {
        dispatch({ type: 'clearCart' })
    }

    const inventoryContext = {
        inventory: inventorystate.inventory,
        carts: inventorystate.carts,
        noofItemsincart: inventorystate.noofItemsincart,
        addInventory: addtoInventoryHandler,
        addToCart: addtoCartHandler,
        decreaseCart:decreaseCartHandler,
        clearCart: clearCartHandler
    }

    return (
        <InventoryCtx.Provider value={inventoryContext}>
            {props.children}
        </InventoryCtx.Provider>
    )
}

export default InventoryCtxProvider;