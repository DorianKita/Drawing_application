class DrawingApp {
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.#init();
    }

    #init(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    }
}

const app = new DrawingApp();