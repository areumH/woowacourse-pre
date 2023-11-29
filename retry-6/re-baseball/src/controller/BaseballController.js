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
  }

  async #getUserNumber() {
    const input = await this.#InputView.getInputNumber();
    return new BaseballModel(input);
  }
}

export default BaseballController;
