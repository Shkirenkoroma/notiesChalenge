import "./style.less";
import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { noties, tags } from "redux/selectors";
import Note from "./note";
import Tag from "./tag";
import Search from "../search";
import LightString from "../lightstring";
import { inlineString, INotiesLayoutProps, IPropsMapping } from "types";

const NotiesLayout: FC<INotiesLayoutProps> = ({
	activeModal,
	error,
}): JSX.Element => {
	const notiesArray = useSelector(noties);
	const tagsArray = useSelector(tags);
	const [filteredArrays, setFilteredArrays] = useState<any | undefined>([]);
	const [initialArrays, setInitialArrays] = useState<any | undefined>([]);
	const [sortField, setSortField] = useState<string>("");
	const [sortFieldInput, setSortFieldInput] = useState<string>("");

	useEffect(() => {
		setFilteredArrays(notiesArray);
		setInitialArrays(notiesArray);
	}, [notiesArray]);

	useEffect(() => {
		const newSortingArray = initialArrays.filter((el: IPropsMapping) => {
			let arraySplit = el.value.split("#");
			let firstCharacter = `${arraySplit[1]}`;
			if (firstCharacter.includes(sortFieldInput)) {
				return el;
			}
		});
		setFilteredArrays(newSortingArray);
	}, [sortFieldInput]);

	useEffect(() => {
		const newArrayBySort = initialArrays.filter((el: IPropsMapping) => {
			let splitArray = el.value.split("#");
			let firstElementByIndex = splitArray[1];
			if (firstElementByIndex === sortField) {
				return el;
			}
		});
		setFilteredArrays(newArrayBySort);
	}, [sortField]);

	const light = useCallback(
		(string: inlineString) => {
			return <LightString searchValue={sortFieldInput} string={string} />;
		},
		[sortFieldInput],
	);

	return (
		<div className="containerNoties">
			<div>
				<Search setSortFieldInput={setSortFieldInput} />
				<div className="tagBlock">
					{tagsArray.map((item, index) => (
						<Tag key={index} item={item} setSortField={setSortField} />
					))}
				</div>
				{filteredArrays.map((item: IPropsMapping, index: number) => (
					<Note
						key={index}
						item={item.value}
						specificId={item.id}
						light={light}
					/>
				))}
			</div>
		</div>
	);
};

export default NotiesLayout;
