import "./style.less";
import { FC, useState } from "react";
import { IPropsInput } from "types";
import Button from "components/button";
import { getNoties } from "redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { noties } from "redux/selectors";

const Input: FC<IPropsInput> = ({
	setNoties,
	notiesData,
	setActiveModal,
	activeModal,
	error,
	setError,
}): JSX.Element => {
	const handleNoties = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNoties(e.target.value);
	};
	const dispatch = useDispatch();
	const notiesArray = useSelector(noties);

	const notiesItem = {
		id: Math.random(),
		value: notiesData,
	};
	const saveNoties = () => {
		let isSameNote = notiesArray.some((item: any) => item.value === notiesData);
		if (!isSameNote && !!notiesData) {
			dispatch(getNoties(notiesItem));
		} else if (!!isSameNote) {
			setActiveModal(!activeModal);
		} else setError(!error);
	};

	const handleChange = (e: React.KeyboardEvent): void => {
		let isSameNote = notiesArray.some((item: any) => item.value === notiesData);
		if (e.key === "Enter") {
			if (!isSameNote && !!notiesData) {
				dispatch(getNoties(notiesItem));
			} else if (!!isSameNote) {
				setActiveModal(!activeModal);
			} else setError(!error);
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
