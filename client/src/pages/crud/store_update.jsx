import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../style.css"

const Store_update = () => {
    const [storeItem, setStoreItem] = useState({
        name: "",
        category: "",
        description: "",
        menu_item: "",
        unit_price: null
    });

    const navigate = useNavigate()

    const location = useLocation()
    const storeId = location.pathname.split("/")[2];

    const handleStoreUpdate = (e) => {
        setStoreItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleStoreUpdateClick = async e => {
        e.preventDefault()
        try {
            await axios.put("/store/" + storeId, storeItem)
            navigate("/store")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='storeForm'>
            <h1>Update store item</h1>
            <input type="text" placeholder="name" onChange={handleStoreUpdate} name="name" />
            <input type="text" placeholder="category" onChange={handleStoreUpdate} name="category" />
            <input type="text" placeholder="description" onChange={handleStoreUpdate} name="description" />
            <input type="text" placeholder="menu_item" onChange={handleStoreUpdate} name="menu_item" />
            <input type="number" placeholder="unit_price" onChange={handleStoreUpdate} name="unit_price" />
            <button onClick={handleStoreUpdateClick}>Update item</button>
        </div>
    )
}

export default Store_update