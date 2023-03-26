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
			state.noties = state.noties.filter(
				(item: IPropsMapping) => item.value !== action.payload,
			);
		},

		saveNoties: (state, action) => {
			const { id, value }: any = action.payload;
			//@ts-ignore
			state.noties = state.noties.map((el: any) =>
				el.id === id ? { ...el, value: value } : { ...el },
			);
		},
	},
});

export const notiesReducer = notiesSlice.reducer;
export const { getNoties, deleteNote, saveNoties } = notiesSlice.actions;
