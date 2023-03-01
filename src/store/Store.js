import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";

const Store = configureStore({
    reducer:{
        categories:categorySlice
    }
});

export default Store
