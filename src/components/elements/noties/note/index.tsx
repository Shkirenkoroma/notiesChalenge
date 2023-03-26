import Button from "components/button";
import { FC } from "react";
import { inlineBoolean, inlineString, IPropsNote } from "types";
import "./style.less";
import { useDispatch } from "react-redux";
import { deleteNote, saveNoties } from "redux/reducers";
import { useState } from "react";

import EditInput from "components/elements/edit";
const Note: FC<IPropsNote> = ({ item, specificId }): JSX.Element => {
	const [edit, setEdit] = useState<inlineBoolean>(false);
	const [valueEdit, setValueEdit] = useState<inlineString>(item);
	const dispatch = useDispatch();

	const notiesItem = {
		id: specificId,
		value: valueEdit,
	};
	const editItem = () => {
		setEdit(!edit);
	};

	const deleteItem = () => {
		dispatch(deleteNote(item));
	};

	const saveEdit = (e: any) => {
		setEdit(!edit);
		//@ts-ignore
		dispatch(saveNoties(notiesItem));
	};

	return (
		<div className="container__note">
			{edit ? (
				<EditInput value={valueEdit} onChange={setValueEdit} />
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
