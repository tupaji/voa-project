import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import "../style.css"

const Store = () => {

    const [store, setStore] = useState([])

    useEffect(() => {
        const fetchAllStore = async () => {
            try {
                const res = await axios.get("/store")
                setStore(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllStore()
    }, [])

    const handleStoreDelete = async (store_id) => {
        try {
            await axios.delete("/store/" + store_id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className='title'>voa store</h1>
            <div className="store">
                {store.map(store_item => (
                    <div className="store_item" key={store_item.store_id}>
                        <h2>{store_item.menu_item}</h2>
                        <p>Store name: {store_item.name}</p>
                        <p>Store category: {store_item.category}</p>
                        <p>Store item description: {store_item.description}</p>
                        <p>Store item unit price: {store_item.unit_price}</p>
                        <button className='delete' onClick={() => handleStoreDelete(store_item.store_id)}>Delete</button>
                        <button className='update'><Link to={`/store_update/${store_item.store_id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <button><Link to="/store_add">add store item</Link></button>
        </div>
    )
}

export default Store