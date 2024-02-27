import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuth: null,
    user: null
  },
  reducers: {
    isAuthenticated: (state, action) => {
      state.userAuth = action.payload;
    },
   
    logOutAction: (state) => {
      state.userAuth = null;
    },

  loginAction : (state, action) => {
    console.log("ran at action", action.payload)
   
    
     state.user = action.payload;
     console.log("this is the state", state)
  }
  },
});

export const { isAuthenticated, logOutAction, loginAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
