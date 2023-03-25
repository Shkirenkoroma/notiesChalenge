export type inlineString = string;
export type inlineNumber = number;
export type inlineBoolean = boolean;

export interface IPropsInput {
   setNoties:(e:inlineString) => void,
   noties:inlineString,
}

export interface IPropsButton {
   className:inlineString, 
   buttonName:inlineString,
   handleFunction:(e:any)=>void
}


export interface IState {
   noties:inlineString[]
}

export interface IPropsNote {
   item:inlineString,
   setNoties:(e:inlineString)=>void,
}
export interface IPropsMapping {
   id:inlineNumber,
   value:inlineString
}