
class AContainer{
    constructor(box, id){
        this.count = 8;
        this.d = 0; //direction 0= right, 1=down,..
        this.box = box;
        this.boxH = parseInt(getComputedStyle(box).height);
        this.bPrntH = (parseInt(getComputedStyle(box.parentElement).height) - 8 - this.boxH);
        // minus paddig, minus box's width
        this.boxId = id;
    }
    right(){
        this.count++;
        this.box.style.left = this.count + 'px';
        if(this.count === this.bPrntH){
            this.d = 1;
            this.count = 8;
            this.box.style.left = "unset";
            this.box.style.right = "8px";
            //unsettin' the value of left so that later when we add to the right property it works, opposites do not work
            if(this.boxId === 1) this.d = 2;
            //changing the direction of the first box
        };
        return
    }
    left(){
        this.count++;
        this.box.style.right = this.count + 'px';
        if(this.count === this.bPrntH){
            this.d = 3;
            this.count = 8;
            this.box.style.right = "unset";
            this.box.style.left = "8px";
            if(this.boxId === 1) this.d = 0;
        };
        return
    }
    down(){
        this.count++;
        this.box.style.top = this.count + 'px';
        if(this.count === this.bPrntH){
            this.d = 2;
            this.count = 8;
            this.box.style.top = "unset";
            this.box.style.bottom = "8px";
        };
        return
    }
    up(){
        this.count++;
        this.box.style.bottom = this.count + 'px';
        if(this.count === this.bPrntH){
            this.d = 0;
            this.count = 8;
            this.box.style.bottom = "unset";
            this.box.style.top = "8px";
        };
        return
    }

    selector(){
        switch(this.d){
            case 0:
                this.right();
                break
            case 1:
                this.down();
                break
            case 2:
                this.left();
                break
            case 3:
                this.up();
                break
        }
    }
    
};



const boxElements = document.querySelectorAll('.box');
const aContainerA = new AContainer (boxElements[0], 1);
const aContainerB = new AContainer (boxElements[1]);
setInterval(() => aContainerA.selector(), 20);
setInterval(() => aContainerB.selector(), 20);



