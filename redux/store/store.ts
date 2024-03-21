import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";
import { userReducer } from "../slices/userSlice";

// creating store



export const store = configureStore({
reducer:{
    authReducer,
    userReducer
}
})