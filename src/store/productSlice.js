import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const productSlice = createSlice({
    name:"product",
    initialState:{
        items:[]
    },
    reducers:{
       setCartItems:(state, action)=>{
        state.items = action.payload;
       },
       addToCart:(state, action)=>{
        state.items.push(action.payload);
       },
       updateCartItem:(state, action)=>{
        const {id, quantity } = action.payload;
        const item = state.items.find(item => item.id === id);
        if(item){
            item.quantity = quantity;
        }
       },
       removeCartItem:(state, action)=>{
        state.items = state.items.filter(item => item.id !== action.payload);
       }
    }
});

export const{setCartItems, addToCart, updateCartItem, removeCartItem} = productSlice.actions;

export const fetchCartItems = () => async dispatch =>
{
    const response =  await axios.get('http://127.0.0.1:8000/cartitems');
    dispatch(setCartItems(response.data));
}
export const addCartItem = (productId, quantity) => async dispatch => {
    const response = await axios.post('http://localhost:8000/api/addtocart', { product: productId, quantity });
    dispatch(addToCart(response.data));
};

export const updateCartItemQty = (id, quantity) => async dispatch =>{
    const response = await axios.put(`http://127.0.0.1:8000/cartupdate/${id}/`,{quantity});
    dispatch(updateCartItem(response.data));
}

export const removeCart = (id) => async dispatch =>{
    await axios.delete(`http://127.0.0.1:8000/cartremove/${id}/`);
    dispatch(removeCartItem(id))
}

export default productSlice.reducer;