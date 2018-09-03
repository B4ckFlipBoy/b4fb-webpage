let angle;
let terminale = [];
terminale["F"] = () => {
    line(0, 0, 10, 0);
    translate(10, 0);
};
terminale["P"] = () => {
    rotate(angle);
};
terminale["M"] = () => {
    rotate(-angle);
};
let variables = [];
variables["X"] = () => {
    return "XPYFP";
};
variables["Y"] = () => {
    return "MFXMY";
};
let fraktal = "FX";
let stepcount = 1;

function setup() {
    angle = HALF_PI;
    createCanvas(400, 400);

    frameRate(1);

}

function draw() {
    background(0);
    translate(100, height / 2);
    scale(5/stepcount);
    rotate((stepcount-1)*-QUARTER_PI);
    stroke(255);
    for (let i = 0; i < fraktal.length; i++) {
        if (terminale[fraktal[i]] !== undefined) {
            terminale[fraktal[i]]();
        }
    }
    step();
    stepcount++;
}

function step() {
    var newFraktal = "";
    for (let i = 0; i < fraktal.length; i++) {
        if (variables[fraktal[i]] !== undefined) {
            newFraktal += variables[fraktal[i]]();
        } else {
            newFraktal += fraktal[i];
        }
    }
    console.log(newFraktal);
    fraktal = newFraktal;
}