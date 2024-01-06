import * as ex from 'excalibur';
import { Resources, loader } from './resources';

const game = new ex.Engine({
    width: 800,
    height: 600,
    canvasElementId: 'game',
    antialiasing: false
});

game.start(loader).then(() => {
    Resources.TiledMap.addToScene(game.currentScene);
});