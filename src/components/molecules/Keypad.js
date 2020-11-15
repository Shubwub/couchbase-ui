import styled from "styled-components";
import { Key } from "../atoms";

export default function Keypad() {
  const buttons = [
    { digit: 1, letters: [] },
    { digit: 2, letters: ["a", "b", "c"] },
    { digit: 3, letters: ["d", "e", "f"] },
    { digit: 4, letters: ["g", "h", "i"] },
    { digit: 5, letters: ["j", "k", "l"] },
    { digit: 6, letters: ["m", "n", "o"] },
    { digit: 7, letters: ["p", "q", "r", "s"] },
    { digit: 8, letters: ["t", "u", "v"] },
    { digit: 9, letters: ["w", "x", "y", "z"] },
    { digit: null, letters: [] },
    { digit: 0, letters: [] },
    { digit: null, letters: [] },
  ];
  return (
    <KeypadContainer>
      <ButtonLayout>
        {buttons.map((item, index) => (
          <Key digit={item.digit} letters={item.letters} index={index} />
        ))}
      </ButtonLayout>
    </KeypadContainer>
  );
}

const KeypadContainer = styled.div`
  width: 50%;
  height: 370px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  padding: 25px;
  box-sizing: border-box;
`;

const ButtonLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  margin: 0 auto;
`;
