import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';
import warning from './templates/warning.html';
import './styles/warning.css';
import fraseTxt from './files/frase.txt';

const title = new Title();
title.create("Home");

const image = new Image();
image.insertSoundCloudImage();

const button = new Button();
button.create();

// Babel spread
const object = { a: 1, b: 2, c: 3, d: 4 };
let { a, b, ...teste } = object;
console.log(a);
console.log(b);
console.log(teste);

// import de html
const body = document.querySelector('body');
body.innerHTML += warning;

// import arquivo texto
const frase = fraseTxt;
console.log(frase.toUpperCase());