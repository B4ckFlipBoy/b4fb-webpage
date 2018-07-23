"use strict";

class GameObject{
    constructor(x, y, width, height, stroke, fill, ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hover = false;
        this.dragged = false;
        this.fill = (fill?fill:255);
        this.stroke = (stroke?stroke:0);
    };

    draw(callback) {
        if(typeof callback === "function") callback();
    };

    checkMouseEvents (callback) {
        if(typeof callback === "function") callback(mouseX, mouseY, clicked);
    }

    rezise (callback) {
        if(typeof callback === "function") callback(newWidth, newHeight);
    }
}