import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, updateCartItemQty, removeCart } from '../store/productSlice';
import '../Style/shoppingCart_CSS.css';

function ShoppingCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.product.items);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateCartItemQty(id, quantity));
    };

    const handleRemove = (id) => {
        dispatch(removeCart(id));
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <img src={item.product.image_url} alt={item.product.name} />
                    <div className="cart-item-details">
                        <h2>{item.product.name}</h2>
                        <p>Price: &#8377;{item.product.price}</p>
                        <label>
                            Quantity:
                            <select
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            >
                                {[...Array(8).keys()].map(num => (
                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                ))}
                            </select>
                        </label>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                        <button className="proceed-button">Proceed to Checkout</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShoppingCart;
