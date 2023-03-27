import Button from "components/button";
import { FC } from "react";
import { inlineBoolean, inlineString, IPropsNote } from "types";
import "./style.less";
import { useDispatch } from "react-redux";
import { createTag, deleteNote, saveNoties } from "redux/reducers";
import { useState } from "react";

import EditInput from "components/elements/edit";
const Note: FC<IPropsNote> = ({ item, specificId }): JSX.Element => {
	const [edit, setEdit] = useState<inlineBoolean>(false);
	const [valueEdit, setValueEdit] = useState<inlineString>(item);
	const [tagValue, setTagValue] = useState<inlineString>(item);
	const dispatch = useDispatch();

	const notiesItem = {
		id: specificId,
		value: valueEdit,
	};

	const editItem = (): void => {
		setEdit(!edit);
	};

	const deleteItem = (): void => {
		dispatch(deleteNote(item));
	};

	const saveEdit = (): void => {
		setEdit(!edit);
		dispatch(saveNoties(notiesItem));

		if (tagValue !== item) {
			dispatch(createTag(tagValue));
		}
	};


	return (
		<div className="container__note" >
			{edit ? (
				<EditInput
					value={valueEdit}
					onChange={setValueEdit}
					setTagValue={setTagValue}
				/>
			) : (
				<div className="container____content__note">{item}</div>
			)}
			<div className="container____content__buttons">
				<Button
					className="button__delete"
					handleFunction={deleteItem}
					buttonName="Удалить"
				/>
				{edit ? (
					<Button
						className="button__edit"
						handleFunction={saveEdit}
						buttonName="Сохранить"
					/>
				) : (
					<Button
						className="button__edit"
						handleFunction={editItem}
						buttonName="Редактировать"
					/>
				)}
			</div>
		</div>
	);
};

export default Note;
