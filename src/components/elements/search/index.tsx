import { FC } from "react";
import { IPropsSearch } from "types";
import "./style.less";

const Search: FC<IPropsSearch> = ({ setSortFieldInput }): JSX.Element => {
	const search = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSortFieldInput(e.target.value);
	};

	return (
		<div className="container__search">
			<input
				className="container__search__input"
				onChange={search}
				type="text"
				placeholder="Введите название тега для поиска"
			/>
		</div>
	);
};

export default Search;
