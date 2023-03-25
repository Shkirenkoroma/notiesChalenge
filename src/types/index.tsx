export type inlineString = string;

export interface IPropsInput {
   setNoties:(e:inlineString) => void
}

export interface IState {
   noties:inlineString[]
}