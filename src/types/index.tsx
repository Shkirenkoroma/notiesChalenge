export type inlineString = string;
export type inlineNumber = number;

export interface IPropsInput {
   setNoties:(e:inlineString) => void,
   noties:inlineString,
}

export interface IPropsButton {
   className:inlineString, 
   buttonName:inlineString,
   handleFunction:()=>void
}


export interface IState {
   noties:inlineString[]
}

export interface IPropsNote {
   item:inlineString,
}