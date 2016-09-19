import WebFont from 'webfontloader';

export default {
  load(fontFamily) {
    return new Promise((resolve) => {
      WebFont.load({
        google: { families: [ fontFamily ] },
        active() {
          resolve();
        }
      });
    });
  }
};
