import "./style.less";
import { FC } from "react";
import { IPropsInput } from "types";
import Button from "components/button";
import { getNoties } from "redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { noties } from "redux/selectors";

const Input: FC<IPropsInput> = ({ setNoties, notiesData }): JSX.Element => {
	const handleNoties = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNoties(e.target.value);
	};
	const dispatch = useDispatch();
	const notiesArray = useSelector(noties);


const notiesItem = {
	id: uuid(),
	value: notiesData,
};
	const saveNoties = () => {
		console.log('notiesData', notiesData)
		
		let  isSameNote = notiesArray.some((item:any) => item.value ===  notiesData);
		if (!isSameNote) {
			dispatch(getNoties(notiesItem));
		}
	};

	const handleChange = (e: React.KeyboardEvent): void => {
		if (e.key === "Enter") {
			dispatch(getNoties(notiesItem));
		}
	};

	return (
		<>
			<input type="text" onChange={handleNoties} onKeyPress={handleChange} />
			<Button
				handleFunction={saveNoties}
				className="button"
				buttonName="Добавить"
			/>
		</>
	);
};

export default Input;
