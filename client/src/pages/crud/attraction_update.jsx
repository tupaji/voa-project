import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../style.css"

const Attract_update = () => {
    const [attractItem, setAttractItem] = useState({
        name: "",
        description: "",
        type: "",
        status: "",
        cpacity: null,
        min_height: null,
        duration: null,
        section: ""
    });

    const navigate = useNavigate()

    const location = useLocation()
    const attractId = location.pathname.split("/")[2];

    const handleAttractUpdate = (e) => {
        setAttractItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAttractUpdateClick = async e => {
        e.preventDefault()
        try {
            await axios.put("/attraction/" + attractId, attractItem)
            navigate("/attraction")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='attractForm'>
            <h1>Update attract item</h1>
            <input type="text" placeholder="name" onChange={handleAttractUpdate} name="name" />
            <input type="text" placeholder="description" onChange={handleAttractUpdate} name="description" />
            <input type="text" placeholder="type" onChange={handleAttractUpdate} name="type" />
            <input type="text" placeholder="status" onChange={handleAttractUpdate} name="status" />
            <input type="number" placeholder="capacity" onChange={handleAttractUpdate} name="cpacity" />
            <input type="number" placeholder="min_height" onChange={handleAttractUpdate} name="min_height" />
            <input type="number" placeholder="duration" onChange={handleAttractUpdate} name="duration" />
            <input type="text" placeholder="section" onChange={handleAttractUpdate} name="section" />
            <button onClick={handleAttractUpdateClick}>Update item</button>
        </div>
    )
}

export default Attract_update