import { useContext } from 'react';
import classes from './CartOverlay.module.css'
import InventoryCtx from '../../store/inventoryCtx';

const CartList = (props) => {
    const ctx = useContext(InventoryCtx)

    const increaseHandler = () => {
        ctx.addToCart(props.item.id)
    }
    const decreaseHandler = () => {
        ctx.decreaseCart(props.item.id)
    }



    return (
        <li>
            <span>{props.item.name}</span>
            <span>{props.item.price}</span>
            <span className={classes.qty}>x{props.item.quantity}</span>
            <div>
                <button onClick={increaseHandler}>+</button>
                <button onClick={decreaseHandler}>-</button>
            </div>
        </li>
    )
}

const CartOverLay = (props) => {
    const ctx = useContext(InventoryCtx)

    const generateHandler = () => {
        ctx.clearCart()
    }

    return (
        <div onClick={props.cartHandler} className={classes.backdrop}>
            <div className={classes.content} onClick={(event) => event.stopPropagation()}>
                <ul>
                    {ctx.carts.map(c => {
                        return <CartList key={c.id} item={c} />
                    })}
                </ul>
                <button onClick={generateHandler}>Generate Bill</button>
            </div>
        </div>
    )
}

export default CartOverLay;