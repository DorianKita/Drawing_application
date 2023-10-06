class DrawingApp {
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.painting = false;
        this.#init();
        this.#initEvents();
    }

    #init(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.strokeStyle = 'white';
    }

    #initEvents(){
        //mouse methods

        //touch methods
    }

    #startPosition(){
        this.painting = !this.painting;
        this.#draw();
    }

    #endPosition(){
        this.painting = !this.painting;
    }

    #draw(){

    }

    changeColor(color){
        this.ctx.strokeStyle = color;
    }
}

const app = new DrawingApp();