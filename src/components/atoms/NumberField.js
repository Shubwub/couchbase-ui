import { useSelector } from "react-redux";
import styled from "styled-components";

export default function NumberField() {
  const number = useSelector(({ keypad }) => keypad.number);

  return <NumberBar>{number}</NumberBar>;
}

const NumberBar = styled.div`
  width: 100%;
  margin-bottom: 25px;
  line-height: 50px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
`;
