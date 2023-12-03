import BaseballController from "./BaseballController.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import Validator from "../validators/Validator.js";
import { GAME } from "../constants/constants.js";

class GameController {
  #InputView;
  #OutputView;
  #Controller;

  #restart;

  constructor() {
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    this.#Controller = new BaseballController();

    this.#restart = false;
  }

  async startGame() {
    this.#OutputView.printStartMessage();

    do {
      await this.#Controller.startBaseball();
      this.#restart = await this.#restartPrompt();
    } while (this.#restart);
  }

  async #getRestartNumber() {
    const input = await this.#InputView.getRestartNumber();
    const restartNumber = parseInt(input);

    Validator.checkIsNotInteger(restartNumber);
    Validator.checkValidNumber(restartNumber);

    return restartNumber;
  }

  async #restartPrompt() {
    const restartNumber = await this.#getRestartNumber();

    if (restartNumber === GAME.RESTART) return true;
    return false;
  }
}

export default GameController;
