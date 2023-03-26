import { noties } from "redux/selectors";
import "./style.less";
import { useSelector } from "react-redux";
import Note from "./note";
import { inlineNumber, inlineString, IPropsMapping } from "types";




const NotiesLayout = ({setNoties, setActiveModal, activeModal, error}:any) => {
	const notiesArray = useSelector(noties);

	console.log("notiesArray", notiesArray);


 


	return (
		<div className="containerNoties">
				{!!activeModal ? (
				<div className="error">Возможно уже есть похожая заметка</div>
			) : null}
			{!!error ? (
				<div className="errorPage">Введите значение</div>
			) : null}
			{notiesArray.map(({id, value}:IPropsMapping) => (
				//@-ts-ignore
				<Note key={id} item={value}  setNoties={setNoties} setActiveModal={setActiveModal} activeModal={activeModal}/>
			))}
		</div>
	);
};

export default NotiesLayout;
