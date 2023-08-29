import controller from './controller.js';
import player from './player.js';
import skyLayout from './sky-layout.js';
import layout from './layout.js';

const me = new player(document.querySelector('.player'));
const background = new layout(document.getElementById('background'), -50, -50);
const ground = new layout(document.getElementById('ground'));
const sky = new skyLayout(document.getElementById('sky'));
const objectLayout = new layout(document.getElementById('object-layout'));
const main = new controller([background, sky, objectLayout], ground, me);

sky.generateClouds();
main.checkCollisionRight();
