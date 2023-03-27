import "./style.less";
import { FC } from "react";

const EditInput: FC<any> = ({
	type = "text",
	value,
	onChange,
	setTagValue,
}): JSX.Element => {
	const handleChange = (value: any) => {
		onChange(value);
		let localString = value + "";
		let splitString = localString.split("#");
		if (splitString.length > 1) {
			const newTagEdit = `${splitString[1]}`;
			setTagValue(newTagEdit);
		};
	};

	return (
		<>
			<div className="todoItem_li">
				<input
					type={type}
					value={value}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>
		</>
	);
};

export default EditInput;
