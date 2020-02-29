import tank from './components/tank.js';
import graveyard from './components/graveyard.js';

const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
};

init();