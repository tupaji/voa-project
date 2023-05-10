import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AttractAdd = () => {
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
    const [err, setError] = useState(null);
    const handleAttractAdd = (e) => {
        setAttractItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAttractAddClick = async e => {
        e.preventDefault()

        let errors = {};
        if (!attractItem.name.trim()) {
            setError('Attraction name is required');
            return null;
        }

        if (!attractItem.description.trim()) {
            setError('Description is required');
            return null;
        }

        if (!attractItem.status.trim()) {
            setError('Status is required');
            return null;
        }else if (attractItem.status!= 'Open' && attractItem.status!= 'Closed' && attractItem.status!='Under Maintenance'){
            setError('Status must be Open or Closed or Under Maintenance');
            return null;
        }

        if (!attractItem.cpacity.trim()) {
            setError('Capacity is required');
            return null;
        }

        if (!attractItem.min_height.trim()) {
            setError('Minimum height is required');
            return null;
        }

        if (!attractItem.duration.trim()) {
            setError('Duration is required');
            return null;
        }

        if (!attractItem.type.trim()) {
            setError('Type is required');
            return null;
        }

        if (!attractItem.section.trim()) {
            setError('Section is required');
            return null;
        }

        try {
            console.log(attractItem)
            await axios.post("/attraction", attractItem)
            //console.log("add")
            navigate("/attraction")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='attractForm'>
            <h1>Add new attraction</h1>
            <input type="text" placeholder="name" onChange={handleAttractAdd} name="name" />
            <input type="text" placeholder="description" onChange={handleAttractAdd} name="description" />
            <input type="text" placeholder="type" onChange={handleAttractAdd} name="type" />
            <input type="text" placeholder="status" onChange={handleAttractAdd} name="status" />
            <input type="number" placeholder="capacity" onChange={handleAttractAdd} name="cpacity" />
            <input type="number" placeholder="min_height" onChange={handleAttractAdd} name="min_height" />
            <input type="number" placeholder="duration" onChange={handleAttractAdd} name="duration" />
            <input type="text" placeholder="section" onChange={handleAttractAdd} name="section" />
            <button onClick={handleAttractAddClick}>Add item</button>
        </div>
    )
}

export default AttractAdd