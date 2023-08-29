import baseObject from './base-object.js';

export default class player extends baseObject {
    constructor(element) {
        super(element);

        this.leftLeg = this.element.querySelector('.leg.left');
        this.rightLeg = this.element.querySelector('.leg.right');
        this.leftArm = this.element.querySelector('.arm.left');
        this.rightArm = this.element.querySelector('.arm.right');
        this.faceInner = this.element.querySelector('.face-inner');
        this.hair = this.element.querySelector('.hair');
        this.hairBack = this.element.querySelector('.hair-back');
        this.hairLeft = this.element.querySelector('.hair-left');
        this.hairRight = this.element.querySelector('.hair-right');
        this.neck = this.element.querySelector('.neck');
        this.mouth = this.element.querySelector('.mouth');

        this.talking = false;
        this.messageBox = this.element.parentNode.querySelector('.message-box');
        this.message = this.messageBox.querySelector('.message');
    }

    setIdle() {
        this.leftLeg.classList.remove('walking-left', 'walking-vertical-left');
        this.rightLeg.classList.remove('walking-right', 'walking-vertical-right');

        this.faceInner.style.left = '0%';
        this.faceInner.style.top = '0%';
        this.neck.style.display = 'block';
        this.hairBack.style.display = 'none';
        this.hair.style.top = '-5%';
        this.hair.style.display = 'block';
        this.hairLeft.style.top = '7%';
        this.hairRight.style.top = '7%';
        this.hairLeft.style.zIndex = '-1';
        this.hairRight.style.zIndex = '-1';
        this.hairLeft.style.display = 'block';
        this.hairRight.style.display = 'block';

        this.up = false;
    }

    moveHorizontal() {
        this.stopTalking();
        this.leftLeg.classList.add('walking-left');
        this.rightLeg.classList.add('walking-right');
    }

    moveVertical() {
        this.stopTalking();
        this.leftLeg.classList.add('walking-vertical-left');
        this.rightLeg.classList.add('walking-vertical-right');
    }

    moveUp() {
        this.hairBack.style.display = 'block';
        this.neck.style.display = 'none';
        this.hair.style.display = 'none';
        this.hairRight.style.display = 'none';
        this.hairLeft.style.display = 'none';
        this.moveVertical();
    }

    moveDown() {
        this.faceInner.style.top = '10%';
        this.hair.style.top = '0%';
        this.hairRight.style.top = '13%';
        this.hairLeft.style.top = '13%';
        this.hairRight.style.display = 'block';
        this.hairLeft.style.display = 'block';
        this.moveVertical();
    }

    moveLeft() {
        this.faceInner.style.left = '-20%';
        this.hairRight.style.display = 'block';
        this.hairRight.style.zIndex = '10';
        this.hairLeft.style.display = 'none';
        this.moveHorizontal();
    }

    moveRight() {
        this.faceInner.style.left = '20%';
        this.hairRight.style.display = 'none';
        this.hairLeft.style.display = 'block';
        this.hairLeft.style.zIndex = '10';
        this.moveHorizontal();
    }

    talk(text, wavingLeft = false, wavingRight = false) {

        this.message.innerHTML = text;
        this.mouth.classList.add('talk');

        if (wavingLeft) {
            this.leftArm.classList.add('waving-left');
        }
        if (wavingRight) {
            this.rightArm.classList.add('waving-right');
        }

        this.talking = true;
        this.messageBox.classList.add('show');
        this.messageBox.classList.remove('hide');
    }

    stopTalking() {
        if (this.talking) {
            this.message.innerHTML = '';
            this.messageBox.classList.add('hide');
            this.messageBox.classList.remove('show');
            this.mouth.classList.remove('talk');
            this.leftArm.classList.remove('waving-left');
            this.rightArm.classList.remove('waving-right');
            this.talking = false;
        }
    }
}