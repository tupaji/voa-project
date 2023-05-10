import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShowAdd = () => {
    const [showItem, setShowItem] = useState({
        name: "",
        description: "",
        type: "",
        s_time: null,
        e_time: null,
        wchair_access: "",
        price: null
    });

    const navigate = useNavigate()
    const [err, setError] = useState(null);
    const handleShowAdd = (e) => {
        setShowItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleShowAddClick = async e => {
        e.preventDefault()

        let errors = {};
        if (!showItem.name.trim()) {
            setError('Item name is required');
            return null;
        }

        if (!showItem.description.trim()) {
            setError('Description is required');
            return null;
        }

        if (!showItem.type.trim()) {
            setError('Type is required');
            return null;
        }

        if (!showItem.s_time.trim()) {
            setError('Start time is required');
            return null;
        }

        if (!showItem.e_time.trim()) {
            setError('End time is required');
            return null;
        }

        if (!showItem.wchair_access.trim()) {
            setError('Wheelchair accessibility is required');
            return null;
        }else if (showItem.wchair_access != '1' && showItem.wchair_access != '0'){
            setError('Wheelchair accessibility must be 1 or 0');
            return null;
        }

        if (!showItem.price.trim()) {
            setError('Price is required');
            return null;
        }

        try {
            await axios.post("/show", showItem)
            //console.log(showItem)
            navigate("/show")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='showForm'>
            <h1>Add new show item</h1>
            <input type="text" placeholder="name" onChange={handleShowAdd} name="name" />
            <input type="text" placeholder="description" onChange={handleShowAdd} name="description" />
            <input type="text" placeholder="type" onChange={handleShowAdd} name="type" />
            <input type="date" placeholder="start time" onChange={handleShowAdd} name="s_time" />
            <input type="date" placeholder="end time" onChange={handleShowAdd} name="e_time" />
            <input type="text" placeholder="wheelchair accessible" onChange={handleShowAdd} name="wchair_access" />
            <input type="number" placeholder="price" onChange={handleShowAdd} name="price" />
            <button onClick={handleShowAddClick}>Add item</button>
        </div>
    )
}

export default ShowAdd