import styled from "styled-components";
import { useDispatch } from "react-redux";
import { accent } from "../../style_variables";
import { addNumber } from "../../redux/actions";

export default function Key({ digit, letters, index }) {
  const dispatch = useDispatch();

  return digit !== null ? (
    <KeyButton key={index} onClick={() => dispatch(addNumber(digit))}>
      <KeyContent>{digit}</KeyContent>
      <KeyContent>{letters.join(" ")}</KeyContent>
    </KeyButton>
  ) : (
    <div></div>
  );
}

const KeyButton = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  color: black;
  height: 90px;
  width: 90px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  &:hover {
    color: white;
    background: ${accent};
    transform: scale(0.9);
    transition: 0.3s ease-in-out;
  }
`;

const KeyContent = styled.p`
  margin: 10px;
`;
