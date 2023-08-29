export default class baseObject {
    constructor(element) {
        this.element = element;
    }

    move(keyCode) {
        switch (keyCode) {
            case 38:
                this.moveUp();
                break;
            case 40:
                this.moveDown();
                break;
            case 37:
                this.moveLeft();
                break;
            case 39:
                this.moveRight();
                break;
            default:
                break;
        }
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    moveUp() { }
    moveDown() { }
    moveLeft() { }
    moveRight() { }
    setIdle() { }
    onCollide(referenceObject, collide) {
        return collide;
    }

    checkCollision(referenceObject) {
        const ownRect = this.element.getBoundingClientRect();
        const referenceRect = referenceObject.element.getBoundingClientRect();

        const isInHoriztonalBounds = ownRect.left < referenceRect.right && ownRect.right > referenceRect.left;
        const isInVerticalBounds = ownRect.top < referenceRect.bottom && ownRect.bottom > referenceRect.top;

        return this.onCollide(referenceObject, isInHoriztonalBounds && isInVerticalBounds);
    }

    checkCollisionLeft(referenceObject) {
        const ownRect = this.element.getBoundingClientRect();
        const referenceRect = referenceObject.element.getBoundingClientRect();

        const isInHoriztonalBounds = ownRect.left < referenceRect.right && ownRect.right > referenceRect.right;
        const isInVerticalBounds = ownRect.top < referenceRect.bottom && ownRect.bottom > referenceRect.bottom;

        return this.onCollide(referenceObject, isInHoriztonalBounds && isInVerticalBounds);
    }

    checkCollisionRight(referenceObject) {
        const ownRect = this.element.getBoundingClientRect();
        const referenceRect = referenceObject.element.getBoundingClientRect();

        const isInHoriztonalBounds = ownRect.right > referenceRect.left && ownRect.left < referenceRect.left;
        const isInVerticalBounds = ownRect.top < referenceRect.bottom && ownRect.bottom > referenceRect.bottom;

        return this.onCollide(referenceObject, isInHoriztonalBounds && isInVerticalBounds);
    }

    checkCollisionBottom(referenceObject) {
        const ownRect = this.element.getBoundingClientRect();
        const referenceRect = referenceObject.element.getBoundingClientRect();

        const isInHoriztonalBounds = ownRect.left < referenceRect.right && ownRect.right > referenceRect.left;
        const isInVerticalBounds = ownRect.top < referenceRect.bottom && ownRect.bottom > referenceRect.bottom;

        return this.onCollide(referenceObject, isInHoriztonalBounds && isInVerticalBounds);
    }

    checkCollisionTop(referenceObject) {
        const ownRect = this.element.getBoundingClientRect();
        const referenceRect = referenceObject.element.getBoundingClientRect();

        const isInHoriztonalBounds = ownRect.left < referenceRect.right && ownRect.right > referenceRect.left;
        const isInVerticalBounds = ownRect.top < referenceRect.bottom && ownRect.bottom > referenceRect.bottom;

        return this.onCollide(referenceObject, isInHoriztonalBounds && isInVerticalBounds);
    }

    getTop() {
        return this.element.offsetTop;
    }

    getBottom() {
        return this.element.offsetTop + this.element.offsetHeight;
    }

    getLeft() {
        return this.element.offsetLeft;
    }

    getRight() {
        return this.element.offsetLeft + this.element.offsetWidth;
    }

    getX() {
        return this.element.offsetLeft - window.pageXOffset;
    }

    getY() {
        return this.element.offsetTop - window.pageYOffset;
    }
}