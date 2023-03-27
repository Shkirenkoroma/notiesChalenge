import "./style.less";
import { FC } from "react";

const EditInput: FC<any> = ({
	type = "text",
	value,
	onChange,
	setTagValue
}): JSX.Element => {
const handleChange = (value:any) => {
	onChange(value)
		let localString = value + "";
		console.log('localString in ', localString)
		let splitString = localString.split("#");
		console.log("newSplitArr", splitString);
		if (splitString.length > 1) {
			const newTagEdit = `${splitString[1]}`;
			console.log('newTag', newTagEdit)
			setTagValue(newTagEdit);
		} else console.log("пe.target.value");
} 

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
