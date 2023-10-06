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
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
    }

    #initEvents(){
        //mouse methods
        this.canvas.addEventListener('mousedown', (e) => this.#startPosition(e));
        this.canvas.addEventListener('mouseup', this.#endPosition.bind(this));
        this.canvas.addEventListener('mousemove', this.#draw.bind(this));
        //touch methods
        this.canvas.addEventListener('touchstart', (e) => this.#startPosition(e));
        this.canvas.addEventListener('touchend', this.#endPosition.bind(this));
        this.canvas.addEventListener('touchmove', this.#draw.bind(this));
    }

    #startPosition(e){
        this.painting = !this.painting;
        this.#draw(e);
    }

    #endPosition(){
        this.painting = !this.painting;
        this.ctx.beginPath();
    }

    #draw(e){
        if(!this.painting) return;

        
        let x = e.clientX || e.touches[0].clientX;
        let y = e.clientY || e.touches[0].clientY;

        this.ctx.lineTo(x,y);
        this.ctx.stroke();
       
        this.ctx.moveTo(x,y);
    }

    changeColor(color){
        this.ctx.strokeStyle = color;
    }

    reset(){
        this.#init();
    }
}

const app = new DrawingApp();