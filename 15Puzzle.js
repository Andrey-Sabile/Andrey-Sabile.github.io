var fifteenPuzzle; //Inner representation of the game
var xspace;
var yspace;
var columns
var rows;
var grid; //What the user sees
var moves;

function start(){
    columns = 4;
    rows = 4;
    moves = 0;
    document.getElementById("moves").innerHTML = moves;
    grid = document.getElementById("grid");
    fifteenPuzzle = new(Array);
    for (var i =0; i<rows; i++){ fifteenPuzzle[i] = new Array(columns)};
    var randArray =[];
    for (var i =0; i<rows*columns; i++){
        var randNum = randomNum(0,rows*columns); //Generates a random number between 0 (inclusive) to rows*columns (exclusive)
        if(randArray.includes(randNum)){
            i--;
        }
        else {randArray.push(randNum)};
    }
    var count = 0;
    for(var i =0; i<rows; i++){
        for(var j=0; j<columns; j++){
            fifteenPuzzle[i][j] = randArray[count];
            if(randArray[count] ==0){
                xspace =i;
                yspace = j;
            }
            count++;
        }
    }
    drawGrid();
}

function drawGrid(){
    var num ="";
    for(var i = 0; i<rows; i++){
        for(var j =0; j<columns; j++){
            if(fifteenPuzzle[i][j] !=0){
                num += "<div class=\"box\" onclick = \"moveTile(" + i + ", " + j + ")\">" + fifteenPuzzle[i][j] +"</div>";
            }
            else num += "<div class = \"blank\"> </div>";
        }
    }
    grid.innerHTML = num;
}

function moveTile(x,y){
    if(legalClick(x,y)){
        fifteenPuzzle[xspace][yspace] = fifteenPuzzle[x][y];
        fifteenPuzzle[x][y] = 0;
        xspace = x;
        yspace = y;
        drawGrid();
        moves++;
        document.getElementById("moves").innerHTML = moves;
    }
}

function legalClick(x,y){
    return Math.abs(x-xspace) + Math.abs(y-yspace) == 1;
}

function randomNum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
}

window.addEventListener("load", start, false);