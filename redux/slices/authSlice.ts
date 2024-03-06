import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuth: null,
    user: null,
    isLoggedIn: false,
    isLoaded: false
  },
  reducers: {
    isAuthenticated: (state, action) => {
      state.userAuth = action.payload;
    },
   
    logOutAction: (state) => {
      state.user = null;
      state.isLoggedIn = false
      
    },

  loginAction : (state, action) => {
    console.log("ran at action", action.payload)
     state.user = action.payload;
     state.isLoggedIn = true
     state.isLoaded = true
     console.log("this is the state", state)
  },
  navigateAuthAction : (state, action) => {
    state.isLoaded = true
  }
  },
});

export const { isAuthenticated, logOutAction, loginAction, navigateAuthAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
