import  "./style.less";
// import { IPropsLightString } from "types";
import { FC } from "react";

const LightString: FC<any> = ({
	searchValue,
	string,
}): JSX.Element => {
	const regExp = new RegExp(`#${searchValue}`, "ig");
	const matchValue = string.match(regExp);
console.log('regExp', regExp)
console.log('matchValue', matchValue)
	return (
		<div>
			{!searchValue
				? string
				: matchValue
         
				? string.split(regExp).map((element:any, index:any, array:any) => {
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
