import Button from "components/button";
import "./style.less";

const Search = ({setSortFieldInput}:any) => {

	const search = (e:any) => {
		setSortFieldInput(e.target.value);
	};

	return (
		<div className="container__search">
			<input className="container__search__input" onChange={search} type="text" placeholder="Введите название тега для поиска"/>
		
		</div>
	);
};

export default Search;
