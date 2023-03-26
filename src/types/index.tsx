export type inlineString = string;
export type inlineNumber = number;
export type inlineBoolean = boolean;

export interface IPropsInput {
   setNoties:(e:inlineString) => void,
   notiesData:inlineString,
   setActiveModal:(e:inlineBoolean)=>void,
   activeModal:inlineBoolean,
   error:inlineBoolean,
   setError:(e:inlineBoolean)=>void
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
   key:inlineNumber,
   setActiveModal:(e:inlineBoolean)=>void,
   activeModal:inlineBoolean,
}
export interface IPropsMapping {
   id:inlineNumber,
   value:inlineString
}