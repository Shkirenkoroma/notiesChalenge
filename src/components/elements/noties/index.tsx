import { noties } from "redux/selectors";
import "./style.less";
import { useSelector } from "react-redux";
import Note from "./note";
import { IPropsMapping } from "types";

const NotiesLayout = ({
	setNoties,
	setActiveModal,
	activeModal,
	error,
}: any) => {
	const notiesArray = useSelector(noties);

	return (
		<div className="containerNoties">
			{!!activeModal ? (
				<div className="error">Возможно уже есть похожая заметка</div>
			) : null}
			{!!error ? <div className="errorPage">Введите значение</div> : null}
			{notiesArray.map((item: IPropsMapping, index: number) => (
				//@-ts-ignore
				<Note
					key={index}
					item={item.value}
					specificId={item.id}
					setNoties={setNoties}
					setActiveModal={setActiveModal}
					activeModal={activeModal}
				/>
			))}
		</div>
	);
};

export default NotiesLayout;
