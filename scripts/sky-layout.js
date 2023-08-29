import layout from './layout.js';

export default class skyLayout extends layout {
    constructor(element) {
        super(element);
    }

    generateClouds() {
        const cloudNumber = this.randomInt(10, 20);
        this.cloudContainer = document.createElement('div');
        this.cloudContainer.classList.add('cloud-container');
        for (let i = 0; i < cloudNumber; i++) {
            const cloud = document.createElement('div');
            const size = this.randomInt(5, 30);
            const top = this.randomInt(0, 100);
            const left = this.randomInt(0, 100);
            const opacity = this.randomInt(2, 5) / 10;

            cloud.classList.add('cloud');
            cloud.style.width = size + 'vmin';
            cloud.style.height = size + 'vmin';
            cloud.style.top = top + '%';
            cloud.style.left = left + '%';
            cloud.style.opacity = opacity;
            this.cloudContainer.appendChild(cloud);
        }
        this.element.appendChild(this.cloudContainer);
    }
}