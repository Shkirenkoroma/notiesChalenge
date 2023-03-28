import "./style.less";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteTag } from "redux/reducers";
import { RxCross2 } from "react-icons/rx";
import { ITagProps } from "types";

const Tag: FC<ITagProps> = ({ item, setSortField }): JSX.Element => {
	const dispatch = useDispatch();

	const deleteTagByID = (e: React.MouseEvent<HTMLElement>): void => {
		e.stopPropagation();
		dispatch(deleteTag(item));
	};

	const getSort = (): void => {
		setSortField(item);
	};

	return (
		<div className="tagcontainer" onClick={getSort}>
			<div className="tagcontainer__content">
				<span className="tagcontainer__content-text">{item}</span>
			</div>
			<div className="tagcontainer__deleteicon" onClick={deleteTagByID}>
				<RxCross2 />
			</div>
		</div>
	);
};

export default Tag;
