import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { accent } from "../../style_variables";
import { setWarning, storeMnemonics } from "../../redux/actions";
import buttons from "../../buttons.json";
import makeMnemonics from "../../helpers/functions";
import { useSpring, animated } from "react-spring";

/**
 * The area above the keypad and mnemonic list for displaying the currently
 * entered number, as well as a button to "submit" the number to the
 * mnemonic generating function.
 */
export default function NumberField() {
  const { number } = useSelector(({ keypad }) => keypad);
  const { warning } = useSelector(({ status }) => status);
  const dispatch = useDispatch();
  const props = useSpring({ opacity: warning ? 1 : 0 });

  return (
    <>
      <Warning style={props}>Please enter no more than 6 numbers.</Warning>
      <NumberBar data-name="number-field">
        {number}
        <Submit
          onClick={() => {
            const mnemonics = makeMnemonics(number, buttons);
            mnemonics
              ? dispatch(storeMnemonics(mnemonics))
              : dispatch(setWarning(true));
          }}
          id="submit"
        >
          {">"}
        </Submit>
      </NumberBar>
    </>
  );
}

const NumberBar = styled(animated.div)`
  width: 100%;
  margin-bottom: 25px;
  height: 50px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
`;

const Warning = styled(NumberBar)`
  background: ${accent};
  color: white;
  font-size: 1.5rem;
  height: auto;
  padding: 15px 0;
  font-weight: bold;
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
