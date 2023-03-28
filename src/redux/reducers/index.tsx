import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { inlineString, IPropsMapping, Note, NotiesState } from "types";

const initialState: NotiesState = {
	noties: [],
	tags: [],
};

const notiesSlice = createSlice({
	name: "noties",
	initialState,
	reducers: {
		getNoties: (state, action: PayloadAction<Note>) => {
			state.noties.push(action.payload);
		},
		deleteNote: (state, action: PayloadAction<inlineString>) => {
			state.noties = state.noties.filter(
				(item: IPropsMapping) => item.value !== action.payload,
			);
		},
		saveNoties: (state, action: PayloadAction<Note>) => {
			const { id, value } = action.payload;
			state.noties = state.noties.map((el) =>
				el.id === id ? { ...el, value: value } : { ...el },
			);
		},
		createTag: (state, action: PayloadAction<inlineString>) => {
			if (!state.tags.includes(action.payload)) {
				state.tags.push(action.payload);
			}
		},
		deleteTag: (state, action: PayloadAction<inlineString>) => {
			state.tags = state.tags.filter(
				(item: inlineString) => item !== action.payload,
			);
		},
	},
});

export const notiesReducer = notiesSlice.reducer;
export const { getNoties, deleteNote, saveNoties, createTag, deleteTag } =
	notiesSlice.actions;
