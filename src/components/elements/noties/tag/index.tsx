import "./style.less";
import { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteTag } from "redux/reducers";

const Tag: FC<any> = ({ item, setSortField }): JSX.Element => {
	const dispatch = useDispatch();
	const deleteTagByID = (): void => {
		dispatch(deleteTag(item));
	};
 
	const getSort = () => {
		setSortField(item)
	}
	
	return (
		<div className="tagcontainer" onClick={getSort}
		>
			<div className="tagcontainer__content">{item}</div>
			<div className="tagcontainer__deleteicon" onClick={deleteTagByID}>
				<RxCross2 />
			</div>
		</div>
	);
};

export default Tag;
