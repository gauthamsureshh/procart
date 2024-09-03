import {createSlice} from "@reduxjs/toolkit";
const productSlice = createSlice({
    name:"product",
    initialState:{
        productId:null,
        productName:null,
        productPrice:null,
        productQty:null
    },
    reducers:{
        prodId:(state,action)=>{
            state.productId=action.payload
        },
        prodName:(state,action)=>{
            state.productName=action.payload
        },
        prodPrice:(state,action)=>{
            state.productPrice=action.payload
        },
        prodQty:(state,action)=>{
            state.productQty=action.payload
        },

    }
})

export const{prodId,prodName,prodPrice,prodQty} = productSlice.actions;
export default productSlice.reducer;