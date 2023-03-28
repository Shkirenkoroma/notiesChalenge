import "./style.less";
import { FC, useState } from "react";
import { inlineString, IPropsInput, IPropsMapping } from "types";
import Button from "components/button";
import { createTag, getNoties } from "redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { noties, tags } from "redux/selectors";

const Input: FC<IPropsInput> = ({
	setNoties,
	notiesData,
	setActiveModal,
	activeModal,
	error,
	setError,
}): JSX.Element => {
	const [tag, setTag] = useState<inlineString>("");
	const notiesArray = useSelector(noties);
	const tagsArray = useSelector(tags);
	const dispatch = useDispatch();

	const notiesItem = {
		id: Math.random(),
		value: notiesData,
	};

	const handleNoties = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNoties(e.target.value);
		setError(false);
		setTag("");
		let localString = e.target.value + "";
		let splitString = localString.split("#");

		if (splitString.length > 1) {
			const newTag = `${splitString[1]}`;
			setTag(newTag);
		}
	};

	const saveNoties = () => {
		let isSameNote = notiesArray.some((item: any) => item.value === notiesData);
		if (!isSameNote && !!notiesData) {
			dispatch(getNoties(notiesItem));
			localStorage.setItem("noties", JSON.stringify(notiesArray));
			if (!!tag) {
				dispatch(createTag(tag));
				localStorage.setItem("tags", JSON.stringify(tagsArray));
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
				localStorage.setItem("noties", JSON.stringify(notiesArray));
				if (!!tag) {
					dispatch(createTag(tag));
					localStorage.setItem("tags", JSON.stringify(tagsArray));
				}
			} else if (!!isSameNote) {
				setActiveModal(!activeModal);
			} else setError(!error);
		}
	};

	return (
		<>
			<input
				className="input"
				type="text"
				onChange={handleNoties}
				onKeyPress={handleChange}
				placeholder="Введите текст"
			/>
			<Button
				handleFunction={saveNoties}
				className="button"
				buttonName="Добавить"
			/>
		</>
	);
};

export default Input;
