import styled from "styled-components";
import { Mnemonic } from "../atoms";
import { useSelector } from "react-redux";

export default function MnemonicList() {
  const mnemonics = useSelector(({ keypad }) => keypad.mnemonics);

  return (
    <List>
      {mnemonics.map((word) => (
        <Mnemonic word={word} />
      ))}
    </List>
  );
}

const List = styled.ul`
  width: 50%;
  margin: 0;
  padding: 25px 40px;
  box-sizing: border-box;
  list-style: none;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  overflow-x: hidden;
  overflow-y: scroll;
  height: 400px;
`;
