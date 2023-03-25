import Button from "components/button";
import { FC } from "react";
import { inlineBoolean, inlineString, IPropsNote } from "types";
import "./style.less";
import { useDispatch } from "react-redux";
import { deleteNote, getNoties } from "redux/reducers";
import { useState } from "react";
import uuid from "react-uuid";
const Note: FC<IPropsNote> = ({ item, setNoties }): JSX.Element => {
	const [edit, setEdit] = useState<inlineBoolean>(false);
	
	const [valueEdit, setValueEdit] = useState<inlineString>('');

	const dispatch = useDispatch();
	console.log("valueEdit", valueEdit);

	const editItem = () => {
		setEdit(!edit);
	};
	const deleteItem = () => {
		dispatch(deleteNote(item));
	};

	const notiesItem = {
		id:uuid(),
		value:valueEdit
	}
	const saveEdit = (e: any) => {
		setEdit(!edit);
		dispatch(getNoties(notiesItem));
	};

	const handleValue = (e:any) => {
		setValueEdit(e.target.value)
	}

	return (
		<div className="container__note">
			{edit ? (
				<input onChange={handleValue} />
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
