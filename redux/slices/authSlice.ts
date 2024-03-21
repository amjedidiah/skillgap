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
     state.user = action.payload;
     state.isLoggedIn = true
     state.isLoaded = true
     console.log("this is the state", state)
  },
  navigateAuthAction : (state, action) => {
    state.isLoaded = true
  },
  updateUserBalanceAction: (state, action) => {
  state.user = {
    ...state.user, balance: action.payload
  } 
  }
  },
});

export const { updateUserBalanceAction,isAuthenticated, logOutAction, loginAction, navigateAuthAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
