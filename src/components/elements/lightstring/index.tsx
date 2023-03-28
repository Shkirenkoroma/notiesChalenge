import "./style.less";
import { FC } from "react";
import { ILightProps } from "types";

const LightString: FC<ILightProps> = ({ searchValue, string }): JSX.Element => {
	const regExp = new RegExp(`#${searchValue}`, "ig");
	const matchValue = string.match(regExp);

	return (
		<div>
			{!searchValue
				? string
				: matchValue
				? string.split(regExp).map((element, index, array) => {
						if (index < array.length - 1) {
							const lightstring = matchValue.shift();
							return (
								<>
									{element}
									<span className="lightstring">{lightstring}</span>
								</>
							);
						}
						return element;
				  })
				: null}
		</div>
	);
};

export default LightString;
