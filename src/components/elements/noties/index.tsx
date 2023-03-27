import { noties, tags } from "redux/selectors";
import "./style.less";
import { useSelector } from "react-redux";
import Note from "./note";
import { IPropsMapping } from "types";
import Tag from "./tag";
import { useEffect } from "react";

const NotiesLayout = ({
	setNoties,
	setActiveModal,
	activeModal,
	error,
}: any) => {
	const notiesArray = useSelector(noties);
	const tagsArray = useSelector(tags);

	useEffect(()=>{
		const notiesData = localStorage.getItem('noties');
		console.log('notiesData', notiesData)
	},[])
	
	useEffect(()=>{
		const tagsData = localStorage.getItem('tags');
		console.log('tagsData', tagsData)
	},[])

	return (
		<div className="containerNoties">
			{!!activeModal ? (
				<div className="error">Возможно уже есть похожая заметка</div>
			) : null}
			<div>
				{!!error ? <div className="errorPage">Введите значение</div> : null}
				<div className="tagBlock">
					{tagsArray.map((item: any, index: any) => (
						<Tag key={index} item={item} />
					))}
				</div>
				{notiesArray.map((item: IPropsMapping, index: number) => (
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
		</div>
	);
};

export default NotiesLayout;
