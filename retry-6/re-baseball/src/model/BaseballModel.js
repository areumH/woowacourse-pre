import { ERROR_MESSAGE } from "../constants/messages.js";

import Validator from "../validators/Validator.js";

class BaseballModel {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    if (Validator.checkIsNotInteger(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_INTEGER);
    }
    if (Validator.checkNumberLength(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
    if (Validator.checkDuplicates(numbers)) {
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATES);
    }
  }
}

export default BaseballModel;
