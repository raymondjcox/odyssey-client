import Style from 'styles/main.scss';
import Interface from './interface';
import PIXI from 'pixi.js';
import pixiTiled from 'pixi-tiled';
import FontLoader from './font-loader';
// import TextRenderer from './text-renderer';
import InputListener from './input-listener';
import Player from './player';

let renderer = new PIXI.autoDetectRenderer(384, 384, {backgroundColor: 0x1099bb });
let stage = new PIXI.Container();

let map;
let you = new Player(5, 5);
let inter = new Interface(renderer);

// TODO in the future we should split this up into different input listeners
let inputListener = new InputListener(you, inter.sendInput);
inputListener.startListening();

// let you = new Player();
// let players = [];
// let inputListener = new InputListener(you);
// let serverListener = new ServerListener(receiveQueue);
// while
//
//  for item in receiveQueue
//  end
//
//  for item in sendQueue
//  end
//
//  render map BG
//
//  render you
//
//  for player in players
//    render player
//  end
//
//  render map FG
//
//
//  sendQueue.pushObjects(inputListener.tick());
// end
//



FontLoader.load('Open+Sans::latin').then(() => {
  let ws = new WebSocket('ws://localhost:3001');
  ws.onopen = () => {
    ws.send('ping');
  };

  PIXI.loader.add('assets/maps/test-map.json', (res) => {
    map = res.tiledMap;
  });

  PIXI.loader.load();

  PIXI.loader.once('complete', ((/*resources*/) => {
    stage.addChild(map.layers.ground);
    stage.addChild(map.layers.background);
    stage.addChild(map.layers.foreground);
    window.requestAnimationFrame(() => renderer.render(stage), 100);
  }));
});
