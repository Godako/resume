import baseObject from './base-object.js';

export default class layout extends baseObject {
    constructor(element, left = 0, top = 0) {
        super(element);

        this.left = left;
        this.top = top;

        this.setSpeed = this.setSpeed.bind(this);

        window.addEventListener('resize', this.setSpeed);

        this.setSpeed();
    }

    setSpeed() {
        this.speed = (window.screen.height > window.screen.width) ? window.innerWidth / 100 : window.innerHeight / 100;
    }

    moveUp(frame = 1) {
        for (let i = 0; i < frame; i++) {
            this.element.style.top = (this.getTop() + this.speed) + 'px';
        }
    }

    moveDown(frame = 1) {
        for (let i = 0; i < frame; i++) {
            this.element.style.top = (this.getTop() - this.speed) + 'px';
        }
    }

    moveLeft(frame = 1) {
        for (let i = 0; i < frame; i++) {
            this.element.style.left = (this.getLeft() + this.speed) + 'px';
        }
    }

    moveRight(frame = 1) {
        for (let i = 0; i < frame; i++) {
            this.element.style.left = (this.getLeft() - this.speed) + 'px';
        }
    }

    setStartPosition() {
        this.element.style.left = this.left + '%';
        this.element.style.top = this.top + '%';
    }
}