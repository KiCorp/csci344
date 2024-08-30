let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5Circles();
    // draw5RedSquares();
    drawGrid(canvasWidth, canvasHeight);

    // Kiko's Code Start
    let nLoops = 5;
    let startRads = 50
    let startCentX = 500
    let startCentY = 200
    let startShape = "Circle"
    let startDirection = "rows"

    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircles(nLoops)
    drawNCirclesFlexible(nLoops, startRads, startCentX, startCentY)
    drawNShapesFlexible(nLoops, startRads, startCentX+100, startCentY, startShape)
    drawNShapesDirectionFlexible(nLoops, startRads, startCentX+200, startCentY, startShape, startDirection)
    // Kiko's Code End
}

// Kiko's Code Start
function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
    if (direction == "row") {
        if (shape=="circle") {
            noFill();
            for (i = 0; i < n; i++) {
                circle(x, y, size);
                x += 50;
            }
        } else {
            noFill();
            for (i = 0; i < n; i++) {
                square(x, y, size);
                x += 50;
            }
        }
    } else {
        drawNShapesFlexible(n, size, x, y, shape)
    }

}

function drawNShapesFlexible(n, size, x, y, shape) {
    if (shape=="circle") {
        noFill();
        for (i = 0; i < n; i++) {
            circle(x, y, size);
            y += 50;
        }
    } else {
        noFill();
        for (i = 0; i < n; i++) {
            square(x, y, size);
            y += 50;
        }
    }
    
}

function drawNCirclesFlexible(n, size, x, y) {
    noFill();
    for (i = 0; i < n; i++) {
        circle(x, y, size);
        y += 50;
    }
}

function drawNCircles(n) {
    let centY = 200
    noFill();
    for (i = 0; i < n; i++) {
        circle(400, centY, 50);
        centY += 50;
    }
}

function draw5CirclesFor() {
    let centY = 200
    noFill();
    for (i = 0; i < 5; i++) {
        circle(300, centY, 50);
        centY += 50;
    }
    
}

function draw5CirclesWhile() {
    let centY = 200
    noFill();
    while (centY <= 400) {
        circle(200, centY, 50);
        centY += 50;
    }
    
}

// Kiko's Code End

// my first function
function draw5Circles() {
    noFill();
    // fill('red');
    circle(100, 200, 50); // centerX, centerY, radius
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}
