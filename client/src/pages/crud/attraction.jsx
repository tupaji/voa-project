import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import "../style.css"

const Attract = () => {

    const [attract_items, setAttract] = useState([])

    useEffect(() => {
        const fetchAllAttract = async () => {
            try {
                const res = await axios.get("/attraction")
                setAttract(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllAttract()
    }, [])

    const handleAttractDelete = async (attract_id) => {
        try {
            await axios.delete("/attraction/" + attract_id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className='title'>voa attraction</h1>
            <div className="attract_items">
                {attract_items.map(attract_item => (
                    <div className="attract_item" key={attract_item.attract_id}>
                        <h2>{attract_item.menu_item}</h2>
                        <p>Attraction name: {attract_item.name}</p>
                        <p>Attraction description: {attract_item.description}</p>
                        <p>Attraction type: {attract_item.type}</p>
                        <p>Attraction status: {attract_item.status}</p>
                        <p>Attraction capacity: {attract_item.cpacity}</p>
                        <p>Attraction min_height: {attract_item.min_height}</p>
                        <p>Attraction duration: {attract_item.duration}</p>
                        <p>Attraction section: {attract_item.section}</p>
                        <button className='delete' onClick={() => handleAttractDelete(attract_item.attract_id)}>Delete</button>
                        <button className='update'><Link to={`/attraction_update/${attract_item.attract_id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <button><Link to="/attraction_add">add attract item</Link></button>
        </div>
    )
}

export default Attract