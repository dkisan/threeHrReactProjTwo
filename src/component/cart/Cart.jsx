import ReactDOM from 'react-dom'
import CartOverLay from "./CartOverLay"

const Cart = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<CartOverLay cartHandler={props.cartHandler}/>, document.getElementById('crtovrlay'))}
        </>
    )
}

export default Cart;