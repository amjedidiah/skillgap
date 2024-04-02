import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   contest: [],
   notification : []
  },
  reducers: {
 createCreatestAction : (state, action) => {
  state.contest = [action.payload,...state.contest]
 },
getAllContestAction: (state, action) => {
  state.contest = [ ...action.payload]
},
getAllNotification: (state, action) =>{
  console.log("run in redux", action.payload)
  state.notification = [ action.payload, ...state.notification]
}

  },
});

export const {createCreatestAction, getAllContestAction, getAllNotification} = userSlice.actions;

export const userReducer = userSlice.reducer;
