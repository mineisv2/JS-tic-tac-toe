var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

blockSize = 100;
diffX = 100;
diffY = 100;


function draw_board(){
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 300);
  ctx.stroke();

  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.stroke();

  ctx.moveTo(0, 100);
  ctx.lineTo(300, 100);
  ctx.stroke();

  ctx.moveTo(0, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();

  var row = 0;
  var board0 = [0, 0, 0];
  var board1 = [0, 0, 0];
  var board2 = [0, 0, 0];

  var board = "board" + row;

  var i;
  for (i = 0; i < 3; i++) {
    var j;
    for (j = 0; i < 3; i++){
      var currentItem;
      currentItem = board[j]
      if (currentItem = 0){
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "blue";
        ctx.rect(blockSize, blockSize, 0 + diffX, 0 + diffY);
        ctx.stroke();
        console.log(currentItem);
      }
    }
    row++;
  }
}

myCanvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  var canvas = document.getElementById("myCanvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  console.log("x:" + x + " y:" + y);
}

draw_board();
