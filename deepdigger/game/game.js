function Game() {
    this.debug = 1;
    this.uiElements = [];
    this.viewpos = {
        x: (windowHeight > windowWidth ? 0 : windowWidth / 2 - windowHeight / 2),
        y: 0,
        width: (windowHeight > windowWidth ? windowWidth - this.debug : windowHeight),
        height: windowHeight - this.debug,
    };

    this.initMainScreen = function () {
        this.uiElements = [];
        let startButton = new Button(this.viewpos.width / 2 - 200 / 2, this.viewpos.height / 2 - 80 / 2, 200, 80);
        startButton.clicked = () => {game.initGameScreen();};
        startButton.setSize = function (newWidth, newHeight) {
            console.log("rezised");
            startButton.stats.x = game.viewpos.width / 2 - 200 / 2;
            startButton.stats.y = game.viewpos.height / 2 - 80 / 2;
        };
        this.uiElements.push(startButton);
    };

    this.draw = function () {
        fill(255);
        stroke(255, 0, 0);
        rect(this.viewpos.x, this.viewpos.y, this.viewpos.width, this.viewpos.height);
        translate(this.viewpos.x, this.viewpos.y);
        this.uiCheckMouseEvents();
        this.uiDraw();
    };

    this.setSize = function (newWidth, newHeight) {
        if (newHeight > newWidth) {
            this.viewpos.x = 0;
        } else {
            this.viewpos.x = newWidth / 2 - newHeight / 2;
        }
        this.viewpos.height = newHeight - this.debug;
        if (newHeight > newWidth) {
            this.viewpos.width = newWidth - this.debug;
        } else {
            this.viewpos.width = newHeight;
        }
        this.uiElements.forEach((element) => {
            element.setSize(newWidth, newHeight);
        });
    };


    this.uiDraw = function () {
        this.uiElements.forEach((element) => {
            element.draw();
        });
    };

    this.uiCheckMouseEvents = function () {
        this.uiElements.forEach((element) => {
            element.checkMouseEvents(mouseX - this.viewpos.x, mouseY - this.viewpos.y, mouseIsPressed);
        });
    };

    this.initGameScreen = function () {
        console.log("Game starting...");
        this.uiElements = [];
        let floatingContainer = new FloatingContainer(0, 0, this.viewpos.width, 1000);
        floatingContainer.stats.fill = 128;
        floatingContainer.stats.stroke = color(0, 0, 255);
        this.uiElements.push(floatingContainer);
    };

}