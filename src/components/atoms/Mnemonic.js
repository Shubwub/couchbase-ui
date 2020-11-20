import styled from "styled-components";
import { accent } from "../../style_variables";

export default function Mnemonic({ word, style }) {
  return (
    <div style={style}>
      <Tile>{word}</Tile>
    </div>
  );
}

const Tile = styled.div`
  text-align: left;
  font-size: 1.5rem;
  color: white;
  margin: 5px;
  height: 40px;
  background: ${accent};
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding-left: 5px;
`;
