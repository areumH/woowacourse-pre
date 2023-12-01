import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

class OutputView {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.START_MESSAGE);
  }

  printResultMessage(result) {
    if (result.STRIKE === 0 && result.BALL === 0) {
      Console.print(OUTPUT_MESSAGE.NONE);
      return;
    }
    if (result.STRIKE > 0 && result.BALL > 0) {
      Console.print(OUTPUT_MESSAGE.BOTH(result.BALL, result.STRIKE));
      return;
    }
    Console.print(
      result.STRIKE > 0
        ? OUTPUT_MESSAGE.STRIKE(result.STRIKE)
        : OUTPUT_MESSAGE.BALL(result.BALL)
    );
    if (result.STRIKE === 3) return true;
  }

  printWinningMessage() {
    Console.print(OUTPUT_MESSAGE.WIN_MESSAGE);
  }
}

export default OutputView;
