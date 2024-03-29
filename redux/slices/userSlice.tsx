import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   contest: []
  },
  reducers: {
 createCreatestAction : (state, action) => {
  state.contest = [action.payload,...state.contest]
 },
getAllContestAction: (state, action) => {
  state.contest = [ ...action.payload]
},

  },
});

export const {createCreatestAction, getAllContestAction} = userSlice.actions;

export const userReducer = userSlice.reducer;
