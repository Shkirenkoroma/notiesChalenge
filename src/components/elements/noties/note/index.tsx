import Button from "components/button";
import { FC } from "react";
import { IPropsNote } from "types";
import "./style.less";
import { useDispatch } from "react-redux";
import { deleteNote } from "redux/reducers";

const Note: FC<IPropsNote> = ({ item }): JSX.Element => {
   const dispatch = useDispatch()

const editItem = () => {
   console.log('edit item')
}
const deleteItem = () => {
   dispatch(deleteNote(item))

}


	return (
		<div className="container__note" >
			<div className="container____content__note">{item}</div>
			<div className="container____content__buttons">
				<Button className="button__delete" handleFunction={deleteItem} buttonName="Удалить"/>
				<Button className="button__edit" handleFunction={editItem} buttonName="Редактировать"/>
			</div>
		</div>
	);
};

export default Note;
