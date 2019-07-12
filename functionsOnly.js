var puzzle = [[1, 5, 9,13], [2, 6,10,14], [3, 7,11, 15], [4, 8,12,0]];  //internal state of the game
var board; //represents the drawing board
var xspace;
var yspace;
var col = 4;
var rows = 4;

function start(){
    for(var k = 0; k<10000; k++){
        moveTile(randomNumber(0,4), randomNumber(0,4))
    }
    board = document.getElementById("grid");
    xspace = rows-1;
    yspace = col - 1;
    drawBoard();
}

function drawBoard(){
    var num ="";
    for(var i = 0; i<rows; i++){
        for(var j =0; j<col; j++){
            if(puzzle[i][j] !=0){
                num += "<div class=\"box\" onclick = \"moveTIle(" + i + ", " + j + ")\">" + puzzle[j][i] +"</div>";
            }
            else num += "<div class = \"blank\"> </div>";
        }
    }
    board.innerHTML = num;
}

function moveTile(x,y){
    if (legalClick(x, y)){
        puzzle[yspace][xspace] = puzzle[y][x];
        puzzle[y][x] = 0;
        xspace = y;
        yspace = x;
    }
}

function legalClick(x,y){
    return Math.abs(x - xspace) + Math.abs(y - yspace) === 1;
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

window.addEventListener("load", start, false);