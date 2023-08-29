import baseObject from './base-object.js';

export default class chair extends baseObject {
    constructor(element) {
        super(element);

        this.computer = document.querySelector('.project-computer');
    }

    onCollide(referenceObject, collide) {
        if (collide) {
            referenceObject.element.classList.remove('show');
            referenceObject.element.classList.add('hide');
            this.element.querySelector('.me').classList.remove('hide');
            this.element.querySelector('.me').classList.add('show');
            this.computer.classList.remove('hide');
            this.computer.classList.add('show');
        } else {
            referenceObject.element.classList.remove('hide');
            referenceObject.element.classList.add('show');
            this.element.querySelector('.me').classList.remove('show');
            this.element.querySelector('.me').classList.add('hide');
            this.computer.classList.remove('show');
            this.computer.classList.add('hide');
        }

        return collide;
    }
}