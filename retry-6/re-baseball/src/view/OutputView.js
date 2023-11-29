import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

class OutputView {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.START_MESSAGE);
  }
}

export default OutputView;
