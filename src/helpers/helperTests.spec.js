const assert = require("assert");
const makeMnemonics = require("./functions");
const buttons = require("../buttons.json");

describe("Mnemonic generator", function () {
  it("Should return passed number when given number has no corresponding letters", function () {
    assert.deepStrictEqual(makeMnemonics(1, buttons), ["1"]);
  });
  it("Should return the correct mnemonics for 2 numbers", function () {
    assert.deepStrictEqual(makeMnemonics(23, buttons), [
      "23",
      "2d",
      "2e",
      "2f",
      "a3",
      "ad",
      "ae",
      "af",
      "b3",
      "bd",
      "be",
      "bf",
      "c3",
      "cd",
      "ce",
      "cf",
    ]);
  });
  it("Should return false if provided a number longer than 6 digits and no max", function () {
    assert.deepStrictEqual(makeMnemonics(1234567, buttons), false);
  });
  it("Should return false if provided a number longer than the given max", function () {
    assert.deepStrictEqual(makeMnemonics(12, buttons, 1), false);
  });
});
