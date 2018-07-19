function Button(x, y, width, height) {
    this.lastMouseStatus = false;
    this.hover = false;
    this.stats = {
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: 0,
        fill: 255,
    };

    this.draw = function () {
        stroke(this.stats.stroke);
        if (this.hover) {
            fill(128);
        } else {
            fill(this.stats.fill);
        }

        rect(this.stats.x, this.stats.y, this.stats.width, this.stats.height);
    };
    this.checkMouseEvents = function (mouseX, mouseY, clicked) {
        if (mouseX >= this.stats.x && mouseX <= this.stats.x + this.stats.width &&
            mouseY >= this.stats.y && mouseY <= this.stats.y + this.stats.height) {
            this.hover = true;
            if (this.lastMouseStatus && !clicked) this.clicked();
        }else {
            this.hover = false;
        }
        this.lastMouseStatus = clicked;
    };

    this.clicked = function () {
        console.log("clicked!");
    };
    this.setSize = function (newWidth, newHeight) {};
}