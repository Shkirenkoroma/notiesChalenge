import { createSlice } from "@reduxjs/toolkit";
import { IPropsMapping } from "types";

const notiesSlice = createSlice({
	name: "noties",
	initialState: {
		noties: [],
	},
	reducers: {
		getNoties: (state, action) => {
			//@ts-ignore
			state.noties.push(action.payload);
		},
		deleteNote: (state, action) => {
			console.log("delete iten in action slice", action.payload);
			state.noties = state.noties.filter(
				(item: IPropsMapping) => item.value !== action.payload,
			);
		},
	},
});

export const notiesReducer = notiesSlice.reducer;
export const { getNoties, deleteNote } = notiesSlice.actions;
