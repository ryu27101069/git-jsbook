import * as area from './exporter.js';

const radius = 5;
console.log(`半径 ${radius} の面積は： ${area.circle(radius)}`);
let b = 4;
let h = 3;
console.log(`底辺 ${b}、高さ ${h} の三角形の面積は： ${area.triangle(b, h)}`);
b = 6;
h = 4;
console.log(`底辺 ${b}、高さ ${h} の四角形の面積は： ${area.square(b, h)}`);
