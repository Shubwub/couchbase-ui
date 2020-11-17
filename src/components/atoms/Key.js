import styled from "styled-components";
import { useDispatch } from "react-redux";
import { accent } from "../../style_variables";
import { addNumber, clearNumber, removeLastNumber } from "../../redux/actions";
import { ReactComponent as BinIcon } from "../../assets/images/Bin.svg";
import { ReactComponent as BackIcon } from "../../assets/images/Back.svg";

export default function Key({ face, letters, index }) {
  const dispatch = useDispatch();

  return face >= 0 ? (
    <KeyButton key={index} onClick={() => dispatch(addNumber(face))}>
      <KeyContent>{face}</KeyContent>
      <KeyContent>{letters.join(" ")}</KeyContent>
    </KeyButton>
  ) : face === "clear" ? (
    <ActionKey onClick={() => dispatch(clearNumber())}>
      <BinIcon />
    </ActionKey>
  ) : (
    <ActionKey onClick={() => dispatch(removeLastNumber())}>
      <BackIcon />
    </ActionKey>
  );
}

const KeyButton = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  color: black;
  height: 80px;
  width: 90px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  border: 1px solid salmon;

  &:nth-child(-n + 3) {
    border-top: none;
  }
  &:nth-child(n - 3) {
    border-bottom: none;
  }
  &:nth-child(3n + 1) {
    border-left: none;
  }
  &:nth-child(3n + 3) {
    border-right: none;
  }

  &:hover {
    color: white;
    background: ${accent};
    transition: 0.3s ease-in-out;
  }
`;

const ActionKey = styled(KeyButton)`
  justify-content: center;
  align-items: center;
  svg {
    width: 40%;
    fill: ${accent};
  }
  &:hover svg {
    fill: white;
  }
`;

const KeyContent = styled.p`
  margin: 10px;
`;
