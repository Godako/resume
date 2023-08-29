import baseObject from './base-object.js';

export default class animatedObject extends baseObject {
    constructor(element) {
        super(element);

        this.shown = false;
    }

    onCollide(referenceObject, collide) {
        if (!this.shown && collide) {
            this.element.classList.add(this.element.dataset.animation);
            this.element.querySelectorAll('.hide').forEach(element => element.classList.remove('hide'));
            this.shown = true;
        }

        return collide;
    }

    checkCollisionTop(referenceObject) {
        if (this.shown) {
            return super.checkCollisionTop(referenceObject);
        } else {
            return this.checkCollision(referenceObject);
        }
    }

    checkCollisionBottom(referenceObject) {
        if (this.shown) {
            return super.checkCollisionBottom(referenceObject);
        } else {
            return this.checkCollision(referenceObject);
        }
    }

    checkCollisionLeft(referenceObject) {
        if (this.shown) {
            return super.checkCollisionLeft(referenceObject);
        } else {
            return this.checkCollision(referenceObject);
        }
    }

    checkCollisionRight(referenceObject) {
        if (this.shown) {
            return super.checkCollisionRight(referenceObject);
        } else {
            return this.checkCollision(referenceObject);
        }
    }
}