import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   contest: []
  },
  reducers: {
 createCreatestAction : (state, action) => {
  state.contest = [...state.contest, action.payload]
 },
getAllContestAction: (state, action) => {
  state.contest = [ ...action.payload]
},

  },
});

export const {createCreatestAction, getAllContestAction} = userSlice.actions;

export const userReducer = userSlice.reducer;
