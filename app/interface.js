import interfacePath from 'assets/interface.png';

export default class Interface {
  constructor(renderer) {
    let input = document.createElement('input');
    let container = document.createElement('div');
    let interfaceImage = document.createElement('img');
    interfaceImage.src = interfacePath;

    input.className = 'send-input';
    container.className = 'container';
    interfaceImage.className = 'interface';
    renderer.view.className = 'viewport';

    container.appendChild(input);
    container.appendChild(interfaceImage);
    container.appendChild(renderer.view);
    document.body.appendChild(container);

    this.sendInput = input;
    this.container = container;
  }
}
