import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StoreAdd = () => {
    const [storeItem, setStoreItem] = useState({
        name: "",
        category: "",
        description: "",
        menu_item: "",
        unit_price: null
    });

    const navigate = useNavigate()
    const [err, setError] = useState(null);
    const handleStoreAdd = (e) => {
        setStoreItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleStoreAddClick = async e => {
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
            const res = await axios.post("/store", storeItem)
            console.log(res.data);
            navigate("/store")
        } catch (err) {
            console.log(err.response.data)
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
            {err && <p>{err}</p>}
        </div>
    )
}

export default StoreAdd