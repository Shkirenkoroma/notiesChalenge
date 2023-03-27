import { createSlice } from "@reduxjs/toolkit";
import { IPropsMapping } from "types";

const notiesSlice = createSlice({
	name: "noties",
	initialState: {
		noties: [],
		tags: [],
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
		createTag: (state, action) => {
			//@ts-ignore
			if (!state.tags.includes(action.payload)) {
				//@ts-ignore
				state.tags.push(action.payload);
			}
		},
		deleteTag: (state, action) => {
			state.tags = state.tags.filter(
				(item: IPropsMapping) => item !== action.payload,
			);
		},
	},
});

export const notiesReducer = notiesSlice.reducer;
export const { getNoties, deleteNote, saveNoties, createTag, deleteTag } =
	notiesSlice.actions;
