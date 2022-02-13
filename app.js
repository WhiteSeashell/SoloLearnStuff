
class AnimationContainer{
    constructor(box){
        this.pos = 0;
        this.d = -1; //direction
        this.box = box;
    }
    moving(){
        if(this.pos === (235-50) || this.pos === 0 ) this.d *= -1;
        this.pos += this.d;
        this.box.style.left = this.pos + 'px';
    }
    
};



const boxElement = document.querySelector('.box1');
const animationContainerA = new AnimationContainer(boxElement);
setInterval(() => animationContainerA.moving(), 30);



