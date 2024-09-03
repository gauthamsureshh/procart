import React from "react";
import { useSelector } from "react-redux";

function Shoppingcart(){
    const productId = useSelector(store=>store.product.productQty);
    return(
        <>
        <h1>Cart Details</h1>
        
        </>
    );
}

export default Shoppingcart;