import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import "../style.css"

const Show = () => {

    const [show_items, setShow] = useState([])

    useEffect(() => {
        const fetchAllShow = async () => {
            try {
                const res = await axios.get("/show")
                setShow(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllShow()
    }, [])

    const handleShowDelete = async (show_id) => {
        try {
            await axios.delete("/show/" + show_id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className='title'>voa show</h1>
            <div className="show_items">
                {show_items.map(show_item => (
                    <div className="show_item" key={show_item.show_id}>
                        <h2>{show_item.menu_item}</h2>
                        <p>Show name: {show_item.name}</p>
                        <p>Show description: {show_item.description}</p>
                        <p>Show type: {show_item.type}</p>
                        <p>Show start time: {show_item.s_time}</p>
                        <p>Show end time: {show_item.e_time}</p>
                        <p>Show wheelchair accessible: {show_item.wchair_access}</p>
                        <p>Show price: {show_item.price}</p>
                        <button className='delete' onClick={() => handleShowDelete(show_item.show_id)}>Delete</button>
                        <button className='update'><Link to={`/show_update/${show_item.show_id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <button><Link to="/show_add">add show item</Link></button>
        </div>
    )
}

export default Show