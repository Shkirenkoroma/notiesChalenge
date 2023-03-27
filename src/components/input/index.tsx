import "./style.less";
import { FC, useState } from "react";
import { inlineString, IPropsInput } from "types";
import Button from "components/button";
import { createTag, getNoties } from "redux/reducers";
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
	const [tag, setTag] = useState<inlineString>("");

	const handleNoties = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNoties(e.target.value);
		setError(false);
		let localString = e.target.value + "";
		let splitString = localString.split("#");
		console.log("newSplitArr", splitString);
		if (splitString.length > 1) {
			const newTag = `#${splitString[1]}`;
			setTag(newTag);
		} else console.log("пe.target.value", e.target.value);
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
			if (!!tag) {
				dispatch(createTag(tag));
			}
		} else if (!!isSameNote) {
			setActiveModal(!activeModal);
		} else setError(!error);
	};

	const handleChange = (e: React.KeyboardEvent): void => {
		let isSameNote = notiesArray.some((item: any) => item.value === notiesData);
		if (e.key === "Enter") {
			if (!isSameNote && !!notiesData) {
				dispatch(getNoties(notiesItem));
				if (!!tag) {
					dispatch(createTag(tag));
				}
			} else if (!!isSameNote) {
				setActiveModal(!activeModal);
			} else setError(!error);
		}
	};

	return (
		<>
			<input className="input" type="text" onChange={handleNoties} onKeyPress={handleChange} />
			<Button
				handleFunction={saveNoties}
				className="button"
				buttonName="Добавить"
			/>
		</>
	);
};

export default Input;
