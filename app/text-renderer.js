import PIXI from 'pixi.js';

export default {
  createMapName(name='') {
    let mapNameOpts = {
      font: '14px Open Sans',
      fill: 'yellow',
      dropShadow: true,
      dropShadowDistance: 2
    };
    let mapName = new PIXI.Text(name, mapNameOpts);
    mapName.x = 500;
    mapName.y = 4;
    return mapName;
  }
};
