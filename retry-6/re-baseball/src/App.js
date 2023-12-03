import GameController from "./controller/GameController.js";

class App {
  async play() {
    const controller = new GameController();
    await controller.startGame();
  }
}

const app = new App();
app.play();

export default App;
