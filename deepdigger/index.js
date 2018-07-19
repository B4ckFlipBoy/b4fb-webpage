let game;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    game = new Game();
    game.initMainScreen();

}

function draw() {
    background(0);
    game.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    game.setSize(windowWidth, windowHeight);
}