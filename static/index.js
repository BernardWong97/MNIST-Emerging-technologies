// Adapted from: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 280, canvasHeight = 280;
let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasWidth);
canvas.style.cursor = "crosshair";
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

// Save the click and drag session coordinated to the arrays
function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

// Redraw the canvas with previously saved drawings in the array
function redraw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;


    for (let i = 0; i < clickX.length; i++) {
        ctx.beginPath();
        if (clickDrag[i] && i) {
            ctx.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            ctx.moveTo(clickX[i] - 1, clickY[i]);
        }
        ctx.lineTo(clickX[i], clickY[i]);
        ctx.closePath();
        ctx.stroke();
    }
}

$('#canvas').mousedown(function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

$('#canvas').mousemove(function (e) {
    if (paint) {
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
    }
});

$('#canvas').mouseup(function (e) {
    paint = false;
});

$('#canvas').mouseleave(function (e) {
    paint = false;
});

$('#clearCanvas').mousedown(function (e) {
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    clearCanvas();
});