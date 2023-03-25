import { noties } from "redux/selectors";
import "./style.less";
import { useSelector } from "react-redux";
import Note from "./note";
import { inlineNumber, inlineString } from "types";
const NotiesLayout = () => {
	const notiesArray = useSelector(noties);

	console.log("notiesArray", notiesArray);

	return (
		<div className="containerNoties">
			{notiesArray.map((item: inlineString, index: inlineNumber) => (
				<Note key={index} item={item} />
			))}
		</div>
	);
};

export default NotiesLayout;
