import { useContext, useRef } from 'react';
import './MedicineForm.module.css'
import InventoryCtx from '../../store/inventoryCtx';

const MedicineForm = () => {
    const ctx = useContext(InventoryCtx)
    
    const nameRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    const formHandler = (event) => {
        event.preventDefault()
        // if(nameRef.current.value === '' || descRef.current.value === '' || priceRef.current.value === '' ){
        //     alert('Please Fill all fields')
        // return
        // }

        const tid = new Date().getTime()
        const item = {
            id: tid,
            name: nameRef.current.value,
            description: descRef.current.value,
            price: +priceRef.current.value,
            quantity: 1
        }
        ctx.addInventory(item)

        // nameRef.current.value = ''
        // descRef.current.value = ''
        // priceRef.current.value = ''
    }

    return (
        <form onSubmit={formHandler}>
            <label>Medicine Name
                <input ref={nameRef} type="text" />
            </label>
            <label>Description
                <input ref={descRef} type="text" />
            </label>
            <label>Price
                <input ref={priceRef} type="number" />
            </label>
            <button type='submit'>Add Medicine</button>
        </form>
    )
}

export default MedicineForm;