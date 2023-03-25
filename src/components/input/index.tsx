import "./style.less";
import { FC } from "react";
import { IPropsInput } from "types";
import Button from "components/button";
import { getNoties } from "redux/reducers";
import { useDispatch } from "react-redux";

const Input: FC<IPropsInput> = ({ setNoties, noties }): JSX.Element => {
	const handleNoties = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNoties(e.target.value);
	};
	const dispatch = useDispatch();
	const saveNoties = () => {
		dispatch(getNoties(noties));
		console.log("action", getNoties(noties));
	};

	const handleChange = (e: React.KeyboardEvent): void => {
		if (e.key === "Enter") {
			dispatch(getNoties(noties));
		}
	};

	return (
		<>
			<input type="text" onChange={handleNoties} 	onKeyPress={handleChange}/>
			<Button
				handleFunction={saveNoties}
				className="button"
				buttonName="Добавить"
			/>
		</>
	);
};

export default Input;
