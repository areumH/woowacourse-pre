import { Random } from "@woowacourse/mission-utils";
import { BASEBALL } from "../constants/constants.js";
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

  static getComputerNumber() {
    const computer = [];
    while (computer.length < BASEBALL.LENGTH) {
      const number = Random.pickNumberInRange(BASEBALL.MIN, BASEBALL.MAX);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer;
  }
}

export default BaseballModel;
