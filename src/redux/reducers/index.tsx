import { createSlice } from "@reduxjs/toolkit";

const notiesSlice = createSlice({
   name:"noties",
   initialState:{
      noties:[],
   },
   reducers:{
      getNoties:(state, action) => {
         console.log('action in slice', action)
         //@ts-ignore
         state.noties.push(action.payload)
      }
   }
})

export const notiesReducer = notiesSlice.reducer;
export const {
   getNoties
} = notiesSlice.actions