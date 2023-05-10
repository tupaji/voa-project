import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../style.css"

const StoreUpdate = () => {
    const [storeItem, setStoreItem] = useState({
        name: "",
        category: "",
        description: "",
        menu_item: "",
        unit_price: null
    });

    const navigate = useNavigate()
    const [err, setError] = useState(null);
    const location = useLocation()
    const storeId = location.pathname.split("/")[2];

    const handleStoreUpdate = (e) => {
        setStoreItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleStoreUpdateClick = async e => {
        e.preventDefault()

        let errors = {};
        if (!storeItem.name.trim()) {
            setError('Item name is required');
            return null;
         }
      
        if (!storeItem.category.trim()) {
            setError('Category is required');
            return null;
         }else if (storeItem.category != 'Food Stall' 
            && storeItem.category != 'Restaurant' 
            && storeItem.category != 'Gift Shop' 
            && storeItem.category != 'Ice Cream Parlor'){
            setError('Category must be Food Stall or Restaurant or Gift Shop or Ice Cream Parlor');
         }

        if (!storeItem.description.trim()) {
            setError('Description is required');
            return null;
        }

        if (!storeItem.menu_item.trim()) {
            setError('Menu_item is required');
            return null;
        }
        
        if (!storeItem.unit_price.trim()) {
            setError('Unit_price is required');
            return null;
        }

        try {
            await axios.put("/store/" + storeId, storeItem)
            navigate("/store")
        } catch (err) {
            console.log(err.response.data)
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
            {err && <p>{err}</p>}
        </div>
    )
}

export default StoreUpdate