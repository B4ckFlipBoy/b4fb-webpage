function FloatingContainer(x, y, width, height) {
    this.stats = {
        x: x,
        y: y,
        xOffset: 0,
        yOffset: 0,
        width: width,
        height: height,
        stroke: 0,
        fill: 255,
        hover: false,
        dragged: false,
        lastMouseY: null,
        scrollbar: (height >= game.viewpos.height),
    };

    this.draw = function () {
        fill(this.stats.fill);
        stroke(this.stats.stroke);
        rect(this.stats.x + this.stats.xOffset, this.stats.y + this.stats.yOffset, this.stats.width, this.stats.height);
    };

    this.checkMouseEvents = function (mouseX, mouseY, clicked) {
        if (mouseX >= this.stats.x + this.stats.xOffset && mouseX <= this.stats.x + this.stats.width + this.stats.xOffset &&
            mouseY >= this.stats.y + this.stats.yOffset && mouseY <= this.stats.y + this.stats.height + this.stats.yOffset) {
            this.stats.hover = true;
            this.stats.dragged = mouseIsPressed;
        } else {
            this.stats.hover = false;
            this.stats.dragged = false;
        }
        if (this.stats.dragged) {
            if (this.stats.lastMouseY) {
                this.stats.yOffset += mouseY - this.stats.lastMouseY;
                if (this.stats.yOffset >= 0) {
                    this.stats.yOffset = 0;
                }else if(this.stats.yOffset <= game.viewpos.height - this.stats.height){
                    this.stats.yOffset = game.viewpos.height - this.stats.height;
                }
            }
            this.stats.lastMouseY = mouseY;
        } else {
            this.stats.lastMouseY = null;
        }
    };
    this.setSize = function (){};
}