import BaseballController from "./BaseballController.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class GameController {
  #InputView;
  #OutputView;
  #Controller;

  constructor() {
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    this.#Controller = new BaseballController();
  }

  async startGame() {
    this.#OutputView.printStartMessage();
    this.#Controller.startBaseball();
  }
}

export default GameController;
