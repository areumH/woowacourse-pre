import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

class InputView {
  async getInputNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.NUMBER_MESSAGE);
    return input;
  }

  async getRestartNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.RESTART_MESSAGE);
    return input;
  }
}

export default InputView;
