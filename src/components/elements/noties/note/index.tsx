import Button from "components/button";
import { FC } from "react";
import { IPropsNote } from "types";
import "./style.less";

const Note: FC<IPropsNote> = ({ item }): JSX.Element => {

const deleteItem = () => {
   console.log('deleted item')
}
const editItem = () => {
   console.log('edit item')
}

	return (
		<div className="container__note">
			<div className="container____content__note">{item}</div>
			<div className="container____content__buttons">
				<Button className="button__delete" handleFunction={deleteItem} buttonName="Удалить"/>
				<Button className="button__edit" handleFunction={editItem} buttonName="Редактировать"/>
			</div>
		</div>
	);
};

export default Note;
