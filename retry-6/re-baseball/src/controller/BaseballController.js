import BaseballModel from "../model/BaseballModel.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class BaseballController {
  #InputView;
  #OutputView;
  
  #match;

  constructor() {
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    
    this.#match = false;
  }

  async startBaseball() {
    const computer = this.#getComputerNumber();

    do {
      const user = await this.#getUserNumber();
  
      const result = user.compareBaseball(computer);
      this.#match = this.#OutputView.printResultMessage(result);
      
    } while (!this.#match);

    this.#OutputView.printWinningMessage();
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
