import { useContext } from 'react'
import classes from './Inventory.module.css'
import InventoryCtx from '../../store/inventoryCtx'

const InventoryList = (props) => {
    const ctx = useContext(InventoryCtx)

    const addtoCartHandler = () => {
        ctx.addToCart(props.item.id)
    }

    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.description}</td>
            <td>{props.item.price}</td>
            <td>{props.item.quantity}</td>
            <td><button onClick={addtoCartHandler}>Add to Cart</button></td>
        </tr>
    )
}

const Inventory = () => {
    const ctx = useContext(InventoryCtx)
    return (
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.inventory.map(i => {
                        return <InventoryList key={i.id} item={i} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Inventory;