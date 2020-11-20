import styled from "styled-components";
import { Mnemonic } from "../atoms";
import { useSelector } from "react-redux";
import { FixedSizeList } from "react-window";

export default function MnemonicList() {
  const { mnemonics } = useSelector(({ keypad }) => keypad);

  const Row = ({ index, style }) => (
    <Mnemonic word={mnemonics[index]} key={mnemonics[index]} style={style} />
  );

  return (
    <FixedSizeList
      width={"50%"}
      height={400}
      itemCount={mnemonics.length}
      itemSize={50}
      style={List}
    >
      {Row}
    </FixedSizeList>
  );
}

const List = {
  margin: 0,
  boxSizing: "border-box",
  listStyle: "none",
  boxShadow: "5px 3px 5px 2px rgba(0, 0, 0, 0.05)",
  overflowX: "hidden",
  background: "white",
};
