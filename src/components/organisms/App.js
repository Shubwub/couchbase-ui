import styled from "styled-components";
import { background } from "../../style_variables";
import { Keypad } from "../molecules";

export default function App() {
	return (
		<AppElement>
			<Keypad />
		</AppElement>
	);
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
