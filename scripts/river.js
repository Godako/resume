import baseObject from './base-object.js';

export default class river extends baseObject {
    constructor(element) {
        super(element);

        this.generateWaves();
        this.bridge = element.querySelector('.bridge');
    }

    onCollide(referenceObject, collide) {
        if (collide && this.bridge) {
            const bridgeRect = this.bridge.getBoundingClientRect();

            collide = !(bridgeRect.left < referenceObject.getLeft() && bridgeRect.right > referenceObject.getRight());
        }

        return collide;
    }

    generateWaves() {
        let top = 0;
        let left = 0;
        let zIndexTop = false;
        for (let i = 1; i < 9; i++) {
            const waveContainer = document.createElement('div');
            waveContainer.classList.add('wave-container');
            for (let j = 0; j < 10; j++) {
                const wave = document.createElement('div');
                wave.classList.add('wave');
                wave.style.top = top + '%';
                if (i % 2 === 0) {
                    wave.classList.add('wave-1');
                    waveContainer.classList.add('left');
                } else {
                    wave.classList.add('wave-2');
                    waveContainer.classList.add('right');
                }
                if (zIndexTop) {
                    wave.style.zIndex = 10;
                } else {
                    zIndexTop = true;
                }
                wave.style.left = left + '%';
                left += 10;

                waveContainer.appendChild(wave);
            }
            this.element.appendChild(waveContainer);

            left = 0;
            top += 10;
        }
    }
}