import baseObject from './base-object.js';

export default class talkZone extends baseObject {
    constructor(element) {
        super(element);
    }

    onCollide(referenceObject, collide) {
        if (collide) {
            if (!referenceObject.talking) {
                referenceObject.talk(this.element.dataset.message, this.element.dataset.wavingLeft, this.element.dataset.wavingRight);
            }
        }

        return false;
    }

    checkCollisionTop(referenceObject) {
        this.checkCollision(referenceObject);
    }

    checkCollisionBottom(referenceObject) {
        this.checkCollision(referenceObject);
    }

    checkCollisionLeft(referenceObject) {
        this.checkCollision(referenceObject);
    }

    checkCollisionRight(referenceObject) {
        this.checkCollision(referenceObject);
    }
}