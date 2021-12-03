// import { getRandomNumberSync } from './sync/sync.js';
// import { getRandomNumberSync as RandomSync } from './sync/sync';

const RandomSync = require('./sync/sync');
const result = RandomSync.getRandomNumberSync(15);
console.log(`nombre généré: ${result}`);