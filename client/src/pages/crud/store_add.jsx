import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Store_add = () => {
    const [storeItem, setStoreItem] = useState({
        name: "",
        category: "",
        description: "",
        menu_item: "",
        unit_price: null
    });

    const navigate = useNavigate()

    const handleStoreAdd = (e) => {
        setStoreItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleStoreAddClick = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("/store", storeItem)
            console.log(res.data);
            navigate("/store")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='storeForm'>
            <h1>Add new store item</h1>
            <input type="text" placeholder="name" onChange={handleStoreAdd} name="name" />
            <input type="text" placeholder="category" onChange={handleStoreAdd} name="category" />
            <input type="text" placeholder="description" onChange={handleStoreAdd} name="description" />
            <input type="text" placeholder="menu_item" onChange={handleStoreAdd} name="menu_item" />
            <input type="number" placeholder="unit_price" onChange={handleStoreAdd} name="unit_price" />
            <button onClick={handleStoreAddClick}>Add item</button>
        </div>
    )
}

export default Store_add