import "./App.less";
import Input from "./components/input";
import { useState } from "react";

const App = () => {
const [noties, setNoties] = useState<string | number>('')




	return (
		<div className="container">
			<div className="container__content">
				<Input  setNoties={setNoties}/>
			</div>
		</div>
	);
}

export default App;
