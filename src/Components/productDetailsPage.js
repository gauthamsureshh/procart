import React, { useState, useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import { prodId,prodName,prodPrice,prodQty } from '../store/productSlice';
import { useDispatch } from 'react-redux';

function ProductDetailsPage(){
    const {productid} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/moviedetails/${productid}/`).then(response => {
            const details = response.data[0];
            setProduct(details);
        })
    }, [productid]);


    if(!product){
        return <div class="spinner-border text-info"></div>
    }

    const addToCart=()=>{
        dispatch(prodId(productid));
        dispatch(prodName(product.movie_title));
        dispatch(prodPrice(productid.duration));
        dispatch(prodQty(2));
        navigate("../shoppingcart");

    }


    return(
        <div className="product-details">
            <div className="card">
                <h2>Product Details</h2>
                <img className="product-image" src={product.poster_url} alt='Product' />
                <h2>Product name:{product.movie_title}</h2>
                <h2>Product Price:{product.duration}</h2>
                <h4>Product Desciption:{product.genre}</h4>
                <button onClick={addToCart}>Add to Cart</button>

            </div>
        </div>
    );
}

export default ProductDetailsPage;