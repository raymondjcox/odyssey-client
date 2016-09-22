export default class InputListener {
  constructor(player, sendInput) {
    this.player = player;
    this.sendInput = sendInput;
  }

  startListening() {
    const UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
    const ENTER = 13, BACKSPACE = 8;

    document.body.onkeydown = ((evt) => {
      let sendInput = this.sendInput;

      if ([UP, DOWN, LEFT, RIGHT, ENTER].indexOf(evt.keyCode) >= 0) {
        sendInput.blur();
      }

      switch (evt.keyCode) {
        case UP:
          console.log('arrow-up');
          break;
        case DOWN:
          console.log('arrow-down');
          break;
        case LEFT:
          console.log('arrow-left');
          break;
        case RIGHT:
          console.log('arrow-right');
          break;
        case ENTER:
          sendInput.value = "";
          console.log('enter');
          break;
        case BACKSPACE:
          if (sendInput.value === '') {
            sendInput.blur();
          }
          console.log('backspace');
          break;

        default:
          sendInput.focus();
          break;
      }
    });
  }
}

