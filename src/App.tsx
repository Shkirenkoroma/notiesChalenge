import "./App.less";
import Input from "./components/input";
import { useState } from "react";
import NotiesLayout from "components/elements/noties";

const App = () => {
const [noties, setNoties] = useState<string>('')


	return (
		<div className="container">
			<div className="container__content">
				<Input  setNoties={setNoties} notiesData={noties}/>
				<NotiesLayout setNoties={setNoties} />
			</div>
		</div>
	);
}

export default App;
