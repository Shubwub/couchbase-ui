/**
 *  The function for creating a list of mnemonics. This function takes a
 *  given number as an input as well as the collection of letters mapped
 *  to each number (buttons in this case), and finally a maximum argument.
 *
 * @param {number} number - The number to draw the mnemonics from, can be
 *                          comprised of no more digits than the max allowed
 * @param {Object - number: letters[]} buttons  - A reference for what
 *                                                letters should be mapped to
 *                                                what individual numbers.
 * @param {number} max - The maxmimum number of digits allowed to create
 *                       mnemonics from. This is to ideally make very large
 *                       resulting arrays easily avoidable due to the inherent
 *                       exponential growth of the function.
 */

const makeMnemonics = (number, buttons, max = 6) => {
  const numbers = Array.from(String(number), Number);

  // If the number provided is too large the function simply returns false.
  if (numbers.length > max) return false;

  /*
   * The buttons object is used to create an array of arrays for availble
   * letters to be used to make the mnemonics.
   */
  const letters = numbers.map((number) => [number, ...buttons[number]]);

  /**
   * Creates the array of mnemonics. The outermost reduce call loops over
   * every set of letters in the above array. A reducer was used as a way
   * to store each resulting mnemonic as it progresses through the array.
   */
  return letters.reduce(
    (acc, curr) => {
      /**
       * With every iteration of the reducer, each letter of the following
       * array is appended to what is in the accumulator array. As the
       * accumulator arrray grows more combinations are added until every
       * combination is in the array at the end of the array of letters.
       */
      const mnemonicArr = [];
      acc.forEach((stem) =>
        curr.forEach((next) => mnemonicArr.push(`${stem}${next}`))
      );
      return mnemonicArr;
    },
    [[]]
  );
};

module.exports = makeMnemonics;
