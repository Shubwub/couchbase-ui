import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { accent } from "../../style_variables";
import { storeMnemonics } from "../../redux/actions";

export default function NumberField() {
  const number = useSelector(({ keypad }) => keypad.number);
  const dispatch = useDispatch();

  // TODO: This is a temporary function that needs to be populated with mnemonic generating code.
  const getMnemonics = (number) => {
    const mnemonics = number.toString().split("");
    dispatch(storeMnemonics(mnemonics));
    return [];
  };

  return (
    <NumberBar>
      {number}
      <Submit onClick={() => getMnemonics(number)}>{">"}</Submit>
    </NumberBar>
  );
}

const NumberBar = styled.div`
  width: 100%;
  margin-bottom: 25px;
  height: 50px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
`;

const Submit = styled.button`
  height: 101%;
  width: 50px;
  border: none;
  background: white;
  color: ${accent};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease-in-out;
  }
`;
