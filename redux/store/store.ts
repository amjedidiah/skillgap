import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";

// creating store



export const store = configureStore({
reducer:{
    authReducer
}
})