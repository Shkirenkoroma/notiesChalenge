import "./style.less";
import { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteTag } from "redux/reducers";

const Tag: FC<any> = ({ item }): JSX.Element => {
	const dispatch = useDispatch();
	const deleteTagByID = (): void => {
		console.log("delete tag");

		dispatch(deleteTag(item));
	};

	return (
		<div className="tagcontainer">
			<div className="tagcontainer__content">{item}</div>
			<div className="tagcontainer__deleteicon" onClick={deleteTagByID}>
				<RxCross2 />
			</div>
		</div>
	);
};

export default Tag;
