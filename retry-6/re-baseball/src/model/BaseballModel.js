import { Random } from "@woowacourse/mission-utils";
import { BASEBALL } from "../constants/constants.js";

import Validator from "../validators/Validator.js";

class BaseballModel {
  #number;

  constructor(number) {
    this.#validateNumbers(number);
    this.#number = number;
  }

  #validateNumbers(number) {
    Validator.checkIsNotInteger(number);
    Validator.checkNumberLength(number);
    Validator.checkDuplicates(number);
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
