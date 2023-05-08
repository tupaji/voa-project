import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../style.css"

const Show_update = () => {
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

    const location = useLocation()
    const showId = location.pathname.split("/")[2];

    const handleShowUpdate = (e) => {
        setShowItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleShowUpdateClick = async e => {
        e.preventDefault()
        try {
            await axios.put("/show/" + showId, showItem)
            console.log(showItem)
            //navigate("/show")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='showForm'>
            <h1>Update show item</h1>
            <input type="text" placeholder="name" onChange={handleShowUpdate} name="name" />
            <input type="text" placeholder="description" onChange={handleShowUpdate} name="description" />
            <input type="text" placeholder="type" onChange={handleShowUpdate} name="type" />
            <input type="date" placeholder="start time" onChange={handleShowUpdate} name="s_time" />
            <input type="date" placeholder="end time" onChange={handleShowUpdate} name="e_time" />
            <input type="text" placeholder="wheelchair accessible" onChange={handleShowUpdate} name="wchair_access" />
            <input type="number" placeholder="price" onChange={handleShowUpdate} name="price" />
            <button onClick={handleShowUpdateClick}>Update item</button>
        </div>
    )
}

export default Show_update