import { FC } from "react";
import "./style.less";

const Button:FC = ():JSX.Element => {

const saveNoties = () => {
console.log('i am in function')
}


	return <button className="button" onClick={saveNoties}><span className="button__name">Добавить</span></button>;
};

export default Button;
