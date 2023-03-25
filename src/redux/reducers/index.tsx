import { createSlice } from "@reduxjs/toolkit";

const notiesSlice = createSlice({
   name:"noties",
   initialState:{
      noties:[],
   },
   reducers:{
      setNoties:(state, action) => {
         state.noties = action.payload
      }
   }
})

export const notiesReducer = notiesSlice.reducer;
export const {
   setNoties
} = notiesSlice.actions