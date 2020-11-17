import styled from "styled-components";
import { Key } from "../atoms";

export default function Keypad() {
  const buttons = [
    { face: 1, letters: [] },
    { face: 2, letters: ["a", "b", "c"] },
    { face: 3, letters: ["d", "e", "f"] },
    { face: 4, letters: ["g", "h", "i"] },
    { face: 5, letters: ["j", "k", "l"] },
    { face: 6, letters: ["m", "n", "o"] },
    { face: 7, letters: ["p", "q", "r", "s"] },
    { face: 8, letters: ["t", "u", "v"] },
    { face: 9, letters: ["w", "x", "y", "z"] },
    { face: "clear", letters: [] },
    { face: 0, letters: [] },
    { face: "delete", letters: [] },
  ];
  return (
    <KeypadContainer>
      <ButtonLayout>
        {buttons.map((item, index) => (
          <Key face={item.face} letters={item.letters} index={index} />
        ))}
      </ButtonLayout>
    </KeypadContainer>
  );
}

const KeypadContainer = styled.div`
  width: 50%;
  height: 400px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`;
