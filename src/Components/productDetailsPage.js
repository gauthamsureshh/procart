import React, { useState, useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import { addCartItem} from '../store/productSlice';
import { useDispatch } from 'react-redux';
import "../Style/productDetails_CSS.css";
import NavBar from './navBar';

function ProductDetailsPage(){
    const {productid} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quantity = 1;

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/productdetails/${productid}/`).then(response => {
            const details = response.data[0];
            setProduct(details);
        })
    }, [productid]);


    if(!product){
        return <div className="spinner-border text-info"></div>
    }

    const addToCart=()=>{
        dispatch(addCartItem( productid,product,quantity ));
        navigate("../shoppingcart");

    };
    
    return(
        <>
        <NavBar/>
        <div className="product-detail">
            <div className="card">
                <h1>PRODUCT DETAILS</h1>
                <img className="product-image" src={product.image_url} alt='Product' />
                <h2>{product.name}</h2>
                <h2>&#8377;{product.price}</h2>
                <h4>{product.description}</h4>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
        </>
    );
}

export default ProductDetailsPage;