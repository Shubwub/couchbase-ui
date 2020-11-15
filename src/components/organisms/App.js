import styled from "styled-components";
import { background } from "../../style_variables";
import { Keypad, MnemonicList } from "../molecules";
import { NumberField } from "../atoms";

export default function App() {
  return (
    <AppElement>
      <NumberField />
      <KeypadSection>
        <Keypad />
        <MnemonicList />
      </KeypadSection>
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
  color: black;
  max-width: 800px;
  margin: 0 auto;
`;

const KeypadSection = styled.section`
  display: flex;
  width: 100%;
`;
