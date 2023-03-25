import "./style.less";
import { FC } from "react";
import { IPropsInput } from "types";
import Button from "components/button";

const Input: FC<IPropsInput> = ({ setNoties }): JSX.Element => {
	const handleNoties = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNoties(e.target.value);
	};

	return (
		<>
			<input type="text" onChange={handleNoties} />
			<Button />
		</>
	);
};

export default Input;
