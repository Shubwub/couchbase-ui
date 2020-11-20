import styled from "styled-components";
import { Key } from "../atoms";
import buttons from "../../buttons.json";
import { mobile } from "../../style_variables";

/**
 * The grid of keys used for entering a number for mnemonic generation.
 * This component imports a "buttons" object used for pulling through
 * the buttons to be rendered. This goal of this was to make it so
 * buttons could be custom-fed so the code for the keypad and keys
 * wouldn't need to be updated for new buttons and/or layouts.
 *
 */
export default function Keypad() {
  /**
   * This is a bit of a hacky solution to mapping over the buttons object.
   * Object.keys() returns a sorted array of keys and would thus throw off
   * the order in which the buttons should be rendered to the keypad.
   *
   * Converting them to a Map did not solve the issue either and thus this
   * array was created as a way to hard-code the order over which the "buttons"
   * object is traversed. A more elegent would be desired if more time were
   * available.
   */
  const buttonOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0, "delete"];

  return (
    <KeypadContainer>
      <ButtonLayout>
        {buttonOrder.map((item) => (
          <Key face={item} letters={buttons[item]} index={item} key={item} />
        ))}
      </ButtonLayout>
    </KeypadContainer>
  );
}

const KeypadContainer = styled.div`
  width: 50%;
  height: 400px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobile}px) {
    width: 100%;
  }
`;

const ButtonLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`;
