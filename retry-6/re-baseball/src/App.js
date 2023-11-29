import BaseballController from "./controller/BaseballController.js";

class App {
  async play() {
    const controller = new BaseballController();
    await controller.startGame();
  }
}

const app = new App();
app.play();

export default App;
