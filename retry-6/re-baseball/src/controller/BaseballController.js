import BaseballModel from "../model/BaseballModel.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class BaseballController {
  #InputView;
  #OutputView;

  constructor() {
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
  }

  async startGame() {
    this.#OutputView.printStartMessage();
    const computer = this.#getComputerNumber();

    while (true) {
      const user = await this.#getUserNumber();

      const result = user.compareBaseball(computer);
      const answer = this.#OutputView.printResultMessage(result);

      if (answer) {
        this.#OutputView.printWinningMessage();
        break;
      }
    }
  }

  async #getUserNumber() {
    const input = await this.#InputView.getInputNumber();
    return new BaseballModel(input);
  }

  #getComputerNumber() {
    return BaseballModel.getComputerNumber();
  }
}

export default BaseballController;
