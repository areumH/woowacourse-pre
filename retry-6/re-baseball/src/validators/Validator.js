import { BASEBALL, GAME } from "../constants/constants.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

const Validator = {
  checkIsNotInteger(input) {
    if (isNaN(input)) throw new Error(ERROR_MESSAGE.INVALID_INTEGER);
  },

  checkNumberLength(input) {
    if (input.length !== BASEBALL.LENGTH)
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
  },

  checkDuplicates(input) {
    if (new Set(input).size !== BASEBALL.LENGTH)
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATES);
  },

  checkValidNumber(input) {
    if (![GAME.RESTART, GAME.QUIT].includes(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    }
  },
};

export default Validator;
