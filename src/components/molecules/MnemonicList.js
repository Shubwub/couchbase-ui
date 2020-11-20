import { Mnemonic } from "../atoms";
import { useSelector } from "react-redux";
import { FixedSizeList } from "react-window";
import styled from "styled-components";
import { mobile } from "../../style_variables";

/**
 * The list of mnemonics to render to screen. The mnemonics for this list
 * are pulled from the redux store and are created by a function called in
 * the "NumberField" component.
 *
 * This component uses a FixedSizeList from the "react-window" library as a
 * way to combat the exponentially large load times that can come as a result
 * of rendering thousands of results in an array. Using this library - only
 * the list items that are in-view of the user are rendered, greatly
 * increasing load times and scrolling fluidity.
 */
export default function MnemonicList() {
  const { mnemonics } = useSelector(({ keypad }) => keypad);

  const Row = ({ index, style }) => (
    <Mnemonic word={mnemonics[index]} key={mnemonics[index]} style={style} />
  );

  return (
    <ListWrapper data-name="mnemonic-list">
      <FixedSizeList
        width={"100%"}
        height={400}
        itemCount={mnemonics.length}
        itemSize={50}
      >
        {Row}
      </FixedSizeList>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 50%;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  background: white;
  @media (max-width: ${mobile}px) {
    width: 100%;
  }
`;
