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
        this.canvas.addEventListener('mousedown', () => this.#startPosition());
        this.canvas.addEventListener('mouseup', this.#endPosition.bind(this));
        this.canvas.addEventListener('mousemove', this.#draw.bind(this));
        //touch methods
        this.canvas.addEventListener('touchstart', () => this.#startPosition());
        this.canvas.addEventListener('touchend', this.#endPosition.bind(this));
        this.canvas.addEventListener('touchmove', this.#draw.bind(this));
    }

    #startPosition(){
        this.painting = !this.painting;
        this.#draw();
    }

    #endPosition(){
        this.painting = !this.painting;
    }

    #draw(){
        if(this.painting){
            console.log('drawing');
        }
    }

    changeColor(color){
        this.ctx.strokeStyle = color;
    }
}

const app = new DrawingApp();