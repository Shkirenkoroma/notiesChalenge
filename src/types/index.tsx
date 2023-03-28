export type inlineString = string;
export type inlineNumber = number;
export type inlineBoolean = boolean;

export interface IPropsInput {
	setNoties: (e: inlineString) => void;
	notiesData: inlineString;
	setActiveModal: (e: inlineBoolean) => void;
	activeModal: inlineBoolean;
	error: inlineBoolean;
	setError: (e: inlineBoolean) => void;
}

export interface IPropsButton {
	className: inlineString;
	buttonName: inlineString;
	handleFunction: () => void;
}

export interface IState {
	noties: { noties: inlineString[]; tags: inlineString[] };
}

export interface IPropsNote {
	item: inlineString;
	specificId: number;
	light: any;
}
export interface IEditInputProps {
	value: inlineString;
	onChange: (e: inlineString) => void;
	setTagValue: (e: inlineString) => void;
}

export interface ILightProps {
	searchValue: inlineString;
	string: inlineString;
}
export interface ITagProps {
	item: inlineString;
	setSortField: (e: inlineString) => void;
}

export interface INotiesLayoutProps {
	activeModal: inlineBoolean;
	error: inlineBoolean;
}
export interface IPropsMapping {
	id: inlineNumber;
	value: inlineString;
}

export interface IPropsSearch {
	setSortFieldInput: (e: inlineString) => void;
}

export type Note = {
	id: inlineNumber;
	value: inlineString;
};

export type NotiesState = {
	noties: Note[];
	tags: inlineString[];
};
