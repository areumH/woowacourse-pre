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

    const user = await this.#getUserNumber();
    const computer = this.#getComputerNumber();
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
