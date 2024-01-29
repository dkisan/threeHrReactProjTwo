import { useContext } from 'react';
import InventoryCtx from '../../store/inventoryCtx';

const CartButton = (props) => {
    const ctx = useContext(InventoryCtx)
    return (
        <>
            <button onClick={props.cartHandler} className='cartbtn'>Cart <span>{ctx.noofItemsincart}</span></button>
        </>
    )
}

export default CartButton;