// Adapted from: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/

var canvasWidth = 400, canvasHeight = 400;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.style.cursor = "crosshair";
drawCanvas();

function drawCanvas() {
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    drawCanvas();
}

function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawCanvas();
  ctx.strokeStyle = 'black';
  ctx.lineJoin = 'round';


  for(var i=0; i < clickX.length; i++) {
    ctx.beginPath();
    if(clickDrag[i] && i){
      ctx.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       ctx.moveTo(clickX[i]-1, clickY[i]);
     }
     ctx.lineTo(clickX[i], clickY[i]);
     ctx.closePath();
     ctx.stroke();
  }
}

$('#canvas').mousedown(function(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$('#canvas').mousemove(function(e) {
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').mouseup(function(e) {
  paint = false;
});

$('#canvas').mouseleave(function(e) {
  paint = false;
});

$('#clearCanvas').mousedown(function(e) {
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    clearCanvas();
});