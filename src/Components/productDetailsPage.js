import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage(){
    const {productid} = useParams();


    return(
        <h1>Product Details:{productid}</h1>
    );
}

export default ProductDetailsPage;