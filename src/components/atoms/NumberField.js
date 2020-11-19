import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { accent } from "../../style_variables";
import { setWarning, storeMnemonics, toggleLoading } from "../../redux/actions";
import buttons from "../../buttons.json";
import { makeMnemonics } from "../../helpers/functions";

export default function NumberField() {
  const { number } = useSelector(({ keypad }) => keypad);
  const { warning } = useSelector(({ status }) => status);
  const dispatch = useDispatch();

  return (
    <>
      {warning && <Warning>Please enter no more than 6 numbers.</Warning>}
      <NumberBar>
        {number}
        <Submit
          onClick={() => {
            const mnemonics = makeMnemonics(number, buttons);
            mnemonics
              ? dispatch(storeMnemonics(mnemonics))
              : dispatch(setWarning(true));
          }}
        >
          {">"}
        </Submit>
      </NumberBar>
    </>
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

const Warning = styled(NumberBar)`
  background: red;
  color: white;
  font-size: 1.5rem;
  height: auto;
  padding: 15px 0;
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
  -webkit-text-stroke: 1px ${accent};
  &:hover {
    transform: scale(1.3);
    color: white;
    -webkit-text-stroke: 1px ${accent};
    transition: 0.3s ease-in-out;
  }
`;
