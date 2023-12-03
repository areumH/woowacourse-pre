import GameController from "./controller/GameController.js";

class App {
  async play() {
    const Controller = new GameController();
    await Controller.startGame();
  }
}

const app = new App();
app.play();

export default App;
