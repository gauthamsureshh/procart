import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
};


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity; 
            } else {
                state.items.push(newItem); 
            }
        },
        updateCartItem: (state, action) => {
            const updatedItem = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === updatedItem.id);

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity = updatedItem.quantity; 
            }
        },
        removeCartItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id); 
        },
    },
});

export const { setCartItems, addToCart, updateCartItem, removeCartItem } = productSlice.actions;


export const fetchCartItems = () => async dispatch => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/cartitems');
        dispatch(setCartItems(response.data));
    } catch (error) {
        console.error("Error fetching cart items:", error);
    }
};

export const addCartItem = (productId, quantity) => async dispatch => {
    try {
      const quantity = 1;
      console.log('id')
      console.log(productId);
      console.log('quan')
      console.log(quantity);
        const response = await axios.post('http://127.0.0.1:8000/addtocart/', { product: productId, quantity });
        dispatch(addToCart(response.data));
    } catch (error) {
        console.error("Error adding cart item:", error);
    }
};


export const updateCartItemQty = (id, quantity) => async dispatch => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/cartupdate/${id}/`, { quantity });
        dispatch(updateCartItem(response.data));
    } catch (error) {
        console.error("Error updating cart item:", error);
    }
};


export const removeCart = (id) => async dispatch => {
    try {
        await axios.delete(`http://127.0.0.1:8000/cartremove/${id}/`);
        dispatch(removeCartItem(id));
    } catch (error) {
        console.error("Error removing cart item:", error);
    }
};

export default productSlice.reducer;
