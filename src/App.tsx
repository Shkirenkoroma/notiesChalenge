import "./App.less";
import Input from "./components/input";
import { useState } from "react";
import NotiesLayout from "components/elements/noties";
import { inlineBoolean, inlineString } from "types";

const App = () => {
	const [noties, setNoties] = useState<inlineString>("");
	const [activeModal, setActiveModal] = useState<inlineBoolean>(false);
	const [error, setError] = useState<inlineBoolean>(false);

	return (
		<div className="container">
			<h1 className="container__title">Note Book</h1>
			<div className="container__content">
				<Input
					setNoties={setNoties}
					notiesData={noties}
					setActiveModal={setActiveModal}
					activeModal={activeModal}
					error={error}
					setError={setError}
				/>
				<NotiesLayout />
			</div>
		</div>
	);
};

export default App;
