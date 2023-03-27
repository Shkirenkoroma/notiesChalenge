import "./style.less";
import { FC } from "react";

const Tag: FC<any> = ({ item }): JSX.Element => {
	return (
		<div className="tagcontainer">
			<div className="tagcontainer__content">{item}</div>
		</div>
	);
};

export default Tag;
