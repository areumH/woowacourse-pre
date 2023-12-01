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

  #getUserNumber() {
    const userNumber = this.#number.split("").map(Number);
    return userNumber;
  }

  static getComputerNumber() {
    const computer = [];
    while (computer.length < BASEBALL.LENGTH) {
      const number = Random.pickNumberInRange(BASEBALL.MIN, BASEBALL.MAX);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer;
  }

  compareBaseball(computer) {
    const user = this.#getUserNumber();
    const result = { STRIKE: 0, BALL: 0 };

    computer.forEach((number, index) => {
      number === user[index]
        ? result.STRIKE++
        : computer.includes(user[index]) && result.BALL++;
    });

    return result;
  }
}

export default BaseballModel;
