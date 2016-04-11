import Style from 'styles/main.css';
import interfacePath from 'assets/interface.png';
import PIXI from 'pixi.js';
import pixiTiled from 'pixi-tiled';

// const { fetch } = window
// fetch('/assets/maps/test-map.json').then((response) => {
  // if (response.ok) {
    // return response.json();
  // } else {
    // return new Promise((resolve, reject) => reject(response.statusText));
  // }
// }).then((map) => {
  // renderMap(map);
// }).catch((err) => {
  // console.error(err);
  // alert(err);
// });
//

let renderer = new PIXI.WebGLRenderer(800, 600, {backgroundColor: 0x1099bb });
let stage = new PIXI.Container();
document.body.appendChild(renderer.view);

let map;
let inter;

PIXI.loader.add('assets/maps/test-map.json', (res) => {
  map = res.tiledMap;
  Object.keys(map.layers).forEach((layerName) => {
    let layer = map.layers[layerName];
    layer.y += 3;
    layer.x += 3;
  });
});

PIXI.loader.add(interfacePath, (res) => {
  inter = new PIXI.Sprite(res.texture);
});

PIXI.loader.load();

PIXI.loader.once('complete', ((/*resources*/) => {
  stage.addChild(inter);
  stage.addChild(map.layers.ground);
  stage.addChild(map.layers.background);
  stage.addChild(map.layers.foreground);
  renderer.render(stage);
}));
