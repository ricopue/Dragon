var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var last_move = {turn: 'up', x: canvas.width / 2, y: canvas.height/ 3};
var z=canvas.width/90;
var link1 = {iter:67,text:'yomesmo1',url:'yomesmo.url',x:0, y:0, w:0,h:0,dir:'R'};
var link2 = {iter:264,text:'My World',url:'yomesmo.url',x:0, y:0, w:0,h:0,dir:'L'};
var link3 = {iter:520,text:'My Work',url:'yomesmo.url',x:0, y:0, w:0,h:0,dir:'L'};


function initialize() {
	// Register an event listener to
	// all the resizeCanvas() function each time
	// the window is resized.
	window.addEventListener('resize', resizeCanvas, false);
	// Draw canvas border for the first time.
	resizeCanvas();
			}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	last_move = {turn: 'up', x: canvas.width / 2, y: canvas.height/ 3};
  turn();
      }

function turn(){
      for (i = 0; i < 1500; i++) {

        turnL = (((i & -i) << 1) & i) !== 0;
        if (turnL) animate('R');
        else  animate('L',5);
        if (i == link1.iter || i == link2.iter || i == link3.iter ) drawtext(i);}
      }

function draw(x, y) {
  context.strokeStyle = 'red';
  context.beginPath();
  context.moveTo(last_move.x, last_move.y);
  context.lineTo(last_move.x + x, last_move.y + y);
  context.stroke();
  last_move.x += x;
  last_move.y += y;
 }

function drawtext(i){
  for (n = 1; n < 4; n++) {
    iter = eval(`link${n}.iter`);
    if ( iter == i) {
        txt = eval(`link${n}.text`);
        dir = eval(`link${n}.dir`);
        text_w =  context.measureText(txt).width;
        text_h =  context.measureText(txt).height;
        if (dir == 'L') move_x = last_move.x - text_w;
        else  move_x = last_move.x;
        context.fillText(txt, move_x, last_move.y);
        `link${n}`.x = move_x;
        `link${n}`.y = last_move.y;
        `link${n}`.w = last_move.x + text_w;
        `link${n}`.h = last_move.y + text_h;
        console.log(eval(`link${n}.x`));
        console.log(move_x);
        console.log(last_move.x);
      }
    }
  }

function animate(m) {
  var newX = 0;
  var newY = 0;
  z=canvas.height/90;

  if (m === 'R' && last_move.turn === 'up') {
    newX += z;
    newY += 0;
    last_move.turn = 'right';
  }
  else if (m === 'R' && last_move.turn === 'right') {
    newX += 0;
    newY += z;
    last_move.turn = 'down';
  }
  else if (m === 'R' && last_move.turn === 'left') {
    newX += 0;
    newY -= z;
    last_move.turn = 'up';
  }
  else if (m === 'R' && last_move.turn === 'down') {
    newX -= z;
    newY += 0;
    last_move.turn = 'left';
  }
  else if (m === 'L' && last_move.turn === 'up') {
    newX -= z;
    newY += 0;
    last_move.turn = 'left';
  }
  else if (m === 'L' && last_move.turn === 'right') {
    newX += 0;
    newY -= z;
    last_move.turn = 'up';
  }
  else if (m === 'L' && last_move.turn === 'left') {
    newX += 0;
    newY += z;
    last_move.turn = 'down';
  }
  else if (m === 'L' && last_move.turn === 'down') {
    newX += z;
    newY += 0;
    last_move.turn = 'right';
  }
  draw(newX, newY);
}

function draw(x, y) {
  context.strokeStyle = 'red';
  context.beginPath();
  context.moveTo(last_move.x, last_move.y);
  context.lineTo(last_move.x + x, last_move.y + y);
  context.stroke();
  last_move.x += x;
  last_move.y += y;
 }

initialize();
canvas.addEventListener("click", function(){
    n=1
    text_x = eval(`link${n}.x`);
    text_y = eval(`link${n}.y`);
    text_w = eval(`link${n}.w`);
    text_h = eval(`link${n}.h`);
    text_url = eval(`link${n}.url`);
    console.log(text_h)
});
