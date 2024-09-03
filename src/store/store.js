import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

var store = configureStore({
    reducer:{
        product:productReducer,
    },
});

export default store;