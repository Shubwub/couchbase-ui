import styled from "styled-components";
import { background } from "./style_variables";

function App() {
	return <AppElement></AppElement>;
}

const AppElement = styled.div`
	text-align: center;
	background-color: ${background};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export default App;
