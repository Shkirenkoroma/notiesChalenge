import { noties } from "redux/selectors";
import "./style.less";
import { useSelector } from "react-redux";
import Note from "./note";
import { inlineNumber, inlineString, IPropsMapping } from "types";




const NotiesLayout = () => {
	const notiesArray = useSelector(noties);

	console.log("notiesArray", notiesArray);


 


	return (
		<div className="containerNoties">
			{notiesArray.map(({id, value}:IPropsMapping) => (
				<Note key={id} item={value}  />
			))}
		</div>
	);
};

export default NotiesLayout;
