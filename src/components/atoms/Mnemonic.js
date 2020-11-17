import styled from "styled-components";
import { accent } from "../../style_variables";

export default function Mnemonic({ word }) {
  return <Item>{word}</Item>;
}

const Item = styled.li`
  padding: 5px 10px;
  text-align: left;
  border-bottom: 1px solid ${accent};
  font-size: 1.5rem;
`;
