import "./style.less";
import { FC } from "react";

const EditInput: FC<any> = ({
	type = "text",
	value,
	onChange,
}): JSX.Element => {
	return (
		<>
			<div className="todoItem_li">
				<input
					type={type}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
		</>
	);
};

export default EditInput;
