import React, { useEffect, useState } from 'react';
import "../Style/homePage_CSS.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function HomePage(){

    const [products,setProducts]=useState([])
    const [showAll,setShowall]=useState(false)
    const nav=useNavigate()

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/movielist').then(response=>{
                setProducts(response.data)
        })
    },[])


    const handleViewall=()=>{
        setShowall(true)
    }
    const handleMoreDetails=(productid)=>{
        nav(`productdetails/${productid}`)
    }

    return(
        <div className='product-showing'>
            <div className='product-list-container'>
                {products.slice(0, showAll ? products.length : 4).map(product => (
                <div className='product-card' key={product.id}>
                    <img className="product-image" src={product.poster_url} alt='Product' />
                    <div className="product-details">
                        <h2 className="name">{product.movie_title}</h2>
                        <h2 className="price">${product.genre}</h2>
                    </div>
                <button className="btn-more-details" onClick={() => handleMoreDetails(product.id)}>More Details</button>
                </div>
            ))}
            </div>
            <button className='btn-view-all' onClick={handleViewall }>View ALL</button>
        </div>
    );
}

export default HomePage;