import Parallax from 'parallax-js';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import '../styles/index.css';

console.log('Welcome !!!');

library.add(faFacebookF, faLinkedinIn, faInstagram);
dom.watch();

const scene = document.getElementById('scene');
// eslint-disable-next-line no-unused-vars
const parallaxInstance = new Parallax(scene);

const PX_RATIO = window.devicePixelRatio;

class Cursor {
  constructor() {
    this.container = window.cursor;
    this.shape = window['cursor-shape'];
    this.translation = { x: 1, y: 1 };
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.precision = 2;
    this.scale = 1;
    this.rotation = 1;
    this.friction = 0.1;
    this.animate();
    this.events();
  }

  events() {
    document.addEventListener(
      'mousemove',
      (e) => {
        this.mouse.x = e.clientX * PX_RATIO;
        this.mouse.y = e.clientY * PX_RATIO;
      },
      false
    );
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  getDist(changeX, changeY) {
    return Math.sqrt(Math.pow(changeX, 2) + Math.pow(changeY, 2));
  }

  speedMorph() {
    const dist = this.getDist(this.dx, this.dy);
    const min = 0.3;
    const MaxDist = 500;
    const total = dist / MaxDist;
    return Number(Math.min(total, min).toFixed(2));
  }

  update() {
    const speedMorph = this.speedMorph(this.dx, this.dy);
    this.scale += (speedMorph - this.scale) * this.friction;

    this.translation.x += this.dx * this.friction;
    this.translation.y += this.dy * this.friction;

    this.rotation = (Math.atan2(this.dy, this.dx) * 180) / Math.PI;
  }

  render() {
    this.update();

    this.container.style.transform = `translate3d(${this.translation.x.toFixed(
      this.precision
    )}px ,${this.translation.y.toFixed(this.precision)}px, 0)`;

    this.shape.style.transform = `rotate(${this.rotation.toFixed(
      this.precision
    )}deg) scale(${1 + this.scale}, ${1 - this.scale})`;
  }

  get dx() {
    return this.mouse.x - this.translation.x;
  }

  get dy() {
    return this.mouse.y - this.translation.y;
  }
}

if (document.getElementById('cursor').style.display !== 'none') {
  // eslint-disable-next-line no-unused-vars
  const cursor = new Cursor();
}
