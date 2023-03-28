import { noties, tags } from "redux/selectors";
import "./style.less";
import { useSelector } from "react-redux";
import Note from "./note";
import { IPropsMapping } from "types";
import Tag from "./tag";
import { useCallback, useEffect, useState } from "react";
import Search from "../search";
import LightString from "../lightstring";

const NotiesLayout = ({
	setNoties,
	setActiveModal,
	activeModal,
	error,
}: any) => {
	const notiesArray = useSelector(noties);
	const tagsArray = useSelector(tags);
	const [filteredArrays, setFilteredArrays] = useState<any | undefined>([]);
	const [initialArrays, setInitialArrays] = useState<any | undefined>([]);
	console.log("notiesArrays", filteredArrays);
	const [sortField, setSortField] = useState<string>("");
	const [sortFieldInput, setSortFieldInput] = useState<string>("");
	console.log("sortField", sortField);

	useEffect(() => {
		setFilteredArrays(notiesArray);
		setInitialArrays(notiesArray);
	}, [notiesArray]);

	useEffect(() => {
		console.log(localStorage.getItem("noties"));
		console.log(localStorage.getItem("tags"));
	}, []);

	useEffect(() => {
		const a = initialArrays.filter((el: any) => {
			let d = el.value.split("#");
			let first = `${d[1]}`;
			if (first.includes(sortFieldInput)) {
				return el;
			}
		});
		setFilteredArrays(a);
	}, [sortFieldInput]);

	useEffect(() => {
		const a = initialArrays.filter((el: any) => {
			let d = el.value.split("#");
			let first = d[1];
			if (first === sortField) {
				return el;
			}
		});
		setFilteredArrays(a);
	}, [sortField]);

	const light = useCallback(
		(string: string) => {
			console.log('string', string)
			console.log('sortFieldInput', sortFieldInput)
			return <LightString searchValue={sortFieldInput} string={string} />;
		},
		[sortFieldInput],
	);

	


	return (
		<div className="containerNoties">
			{!!activeModal ? (
				<div className="error">Возможно уже есть похожая заметка</div>
			) : null}
			<div>
				{!!error ? <div className="errorPage">Введите значение</div> : null}
				<Search setSortFieldInput={setSortFieldInput}/>
				<div className="tagBlock">
					{tagsArray.map((item: any, index: any) => (
						<Tag key={index} item={item} setSortField={setSortField}/>
					))}
				</div>
				{filteredArrays.map((item: IPropsMapping, index: number) => (
					<Note
						key={index}
						item={item.value}
						specificId={item.id}
						setNoties={setNoties}
						setActiveModal={setActiveModal}
						activeModal={activeModal}
						light={light}
					/>
				))}
			</div>
		</div>
	);
};

export default NotiesLayout;
