import "./style.less";
import { FC } from "react";
import { IEditInputProps, inlineString } from "types";

const EditInput: FC<IEditInputProps> = ({
	value,
	onChange,
	setTagValue,
}): JSX.Element => {
	const handleChange = (value: inlineString): void => {
		onChange(value);
		let localString = value + "";
		let splitString = localString.split("#");
		if (splitString.length > 1) {
			const newTagEdit = `${splitString[1]}`;
			setTagValue(newTagEdit);
		}
	};

	return (
		<>
			<div className="todoItem_li">
				<input
					type="text"
					value={value}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>
		</>
	);
};

export default EditInput;
