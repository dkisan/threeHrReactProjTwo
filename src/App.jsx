import { useContext, useState } from 'react'
import './App.css'
import Cart from './component/cart/Cart'
import MedicineForm from './component/form/MedicineForm'
import Inventory from './component/inventory/Inventory'
import InventoryCtxProvider from './store/InventoryCtxProvider'
import InventoryCtx from './store/inventoryCtx'
import CartButton from './component/cart/CartButton'

function App() {
  const [showCart, setShowCart] = useState(false)

  const cartHandler = ()=>{
    setShowCart((prev)=>!prev)
  }

  const ctx = useContext(InventoryCtx)

  return (
    <InventoryCtxProvider>
      {showCart && <Cart cartHandler={cartHandler}/>}
      <h1><u>Inventory Management</u></h1>
      <CartButton cartHandler={cartHandler}/>
      <MedicineForm />
      <hr />
      <Inventory />
    </InventoryCtxProvider>
  )
}

export default App
