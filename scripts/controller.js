import baseObject from './base-object.js';
import river from './river.js';
import talkZone from './talk-zone.js';
import animatedObject from './animated-object.js';
import chair from './chair.js';

export default class controller {
    constructor(layouts, borderLayout, player) {
        this.player = player;
        this.layouts = layouts;
        this.borderLayout = borderLayout;
        this.touchedKeyCode;

        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);

        this.collectObjects();
        this.assignMoveEvents();
    }

    collectObjects() {
        this.baseObjects = [];
        const objects = document.querySelectorAll('.object');
        objects.forEach(object => {

            switch (object.dataset.class) {
                case 'river':
                    this.baseObjects.push(new river(object));
                    break;
                case 'talk-zone':
                    this.baseObjects.push(new talkZone(object));
                    break;
                case 'animated-object':
                    this.baseObjects.push(new animatedObject(object));
                    break;
                case 'chair': 
                    this.baseObjects.push(new chair(object));
                default:
                    this.baseObjects.push(new baseObject(object));
                    break;
            }

        });
    }

    assignMoveEvents() {
        document.addEventListener('keydown', e => {
            this.move(e.keyCode);
        });

        document.addEventListener('keyup', e => {
            this.setIdle();
        });

        document.addEventListener('touchstart', e => {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const screenTop = this.player.getTop();
            const screenBottom = this.player.getBottom();
            const screenLeft = this.player.getLeft();
            const screenRight = this.player.getRight();

            if (touchY < screenTop) {
                this.move(38);
            } else if (touchY > screenTop && touchY < screenBottom) {
                if (touchX < screenLeft) {
                    this.move(37);
                } else if (touchX > screenRight) {
                    this.move(39);
                }
            } else if (touchY > screenBottom) {
                this.move(40);
            }
        });

        document.addEventListener('touchend', e => {
            this.setIdle();
        });

        window.addEventListener('resize', () => {
            this.borderLayout.setStartPosition();
            this.layouts.forEach(layout => {
                layout.setStartPosition();
            });
        });
    }

    checkCollisionRight() {
        let collision = false;
        for (let i = 0; i < this.baseObjects.length; i++) {
            collision = this.baseObjects[i].checkCollisionRight(this.player);
            if (collision) {
                break;
            }
        }
        return collision;
    }

    checkCollisionLeft() {
        let collision = false;
        for (let i = 0; i < this.baseObjects.length; i++) {
            collision = this.baseObjects[i].checkCollisionLeft(this.player);
            if (collision) {
                break;
            }
        }
        return collision;
    }

    checkCollisionTop() {
        let collision = false;
        for (let i = 0; i < this.baseObjects.length; i++) {
            collision = this.baseObjects[i].checkCollisionTop(this.player);
            if (collision) {
                break;
            }
        }
        return collision;
    }

    checkCollisionBottom() {
        let collision = false;
        for (let i = 0; i < this.baseObjects.length; i++) {
            collision = this.baseObjects[i].checkCollisionBottom(this.player);
            if (collision) {
                break;
            }
        }
        return collision;
    }


    moveUp() {
        if (this.animation) {
            this.player.moveUp();
            this.borderLayout.moveUp();
            this.layouts.forEach(layout => {
                layout.moveUp();
            });

            if (this.borderLayout.getTop() < this.player.getBottom() && !this.checkCollisionBottom()) {
                requestAnimationFrame(this.moveUp);
            } else {
                this.borderLayout.moveDown(3);
                this.layouts.forEach(layout => {
                    layout.moveDown(2);
                });
                this.player.setIdle();
            }
        }
    }

    moveDown() {
        if (this.animation) {
            this.player.moveDown();
            this.borderLayout.moveDown();
            this.layouts.forEach(layout => {
                layout.moveDown();
            });

            if (this.borderLayout.getBottom() > this.player.getBottom() && !this.checkCollisionTop()) {
                requestAnimationFrame(this.moveDown);
            } else {
                this.borderLayout.moveUp(2);
                this.layouts.forEach(layout => {
                    layout.moveUp(2);
                });
                this.player.setIdle();
            }
        }
    }

    moveLeft() {
        if (this.animation) {
            this.player.moveLeft();
            this.borderLayout.moveLeft();
            this.layouts.forEach(layout => {
                layout.moveLeft();
            });

            if (this.borderLayout.getLeft() < this.player.getLeft() && !this.checkCollisionRight()) {
                requestAnimationFrame(this.moveLeft);
            } else {
                this.borderLayout.moveRight(2);
                this.layouts.forEach(layout => {
                    layout.moveRight(2);
                });
                this.player.setIdle();
            }
        }
    }

    moveRight() {
        if (this.animation) {
            this.player.moveRight();
            this.borderLayout.moveRight();
            this.layouts.forEach(layout => {
                layout.moveRight();
            });

            if (this.borderLayout.getRight() > this.player.getRight() && !this.checkCollisionLeft()) {
                requestAnimationFrame(this.moveRight);
            } else {
                this.borderLayout.moveLeft(2);
                this.layouts.forEach(layout => {
                    layout.moveLeft(2);
                });
                this.player.setIdle();
            }
        }
    }

    move(keyCode) {
        if (!this.touchedKeyCode) {
            switch (keyCode) {
                case 38:
                    if (this.borderLayout.getTop() < this.player.getBottom() && !this.checkCollisionBottom()) {
                        this.animation = true;
                        requestAnimationFrame(this.moveUp);
                    }
                    break;
                case 40:
                    if (this.borderLayout.getBottom() > this.player.getBottom() && !this.checkCollisionTop()) {
                        this.animation = true;
                        requestAnimationFrame(this.moveDown);
                    }
                    break;
                case 37:
                    if (this.borderLayout.getLeft() < this.player.getLeft() && !this.checkCollisionRight()) {
                        this.animation = true;
                        requestAnimationFrame(this.moveLeft);
                    }
                    break;
                case 39:
                    if (this.borderLayout.getRight() > this.player.getRight() && !this.checkCollisionLeft()) {
                        this.animation = true;
                        requestAnimationFrame(this.moveRight);
                    }
                    break;
                default:
                    break;
            }
            this.touchedKeyCode = keyCode;
        }
    }

    setIdle() {
        if (this.touchedKeyCode) {
            this.player.setIdle();
            this.animation = false;
            this.touchedKeyCode = false;
        }
    }
}
