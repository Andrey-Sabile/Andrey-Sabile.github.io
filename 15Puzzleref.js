var moves = 0;
var table;
var rows;
var columns;
var textMoves;
var grid;

function start() // Acts like a constructor
{ 
    var button = document.getElementById("newGame");
    button.addEventListener("click", startNewGame, false);
    textMoves = document.getElementById("moves")
    table = document.getElementById("table");
    rows = 4;
    columns = 4;
    startNewGame();
}

function startNewGame()
{
    var arrayofNumbers = new Array();
    var arrayHasNumberBeenUsed;
    var randomNumber = 0;
    var count = 0;
    moves = 0;
    rows = document.getElementById("rows").value;
    columns = document.getElementById("columns").value;
    textMoves.innerHTML = moves;
    
    //Creates the board size depending on number of rows and columns 
    grid = new Array(rows)
    for (var i = 0; i<rows; i++) grid[i] = new Array(columns);

    //Set temporary array for allocating unique numbers
    arrayHasNumberBeenUsed = new Array(rows * columns);
    for (var i =0; i < rows * columns; i++) 
    {
        arrayHasNumberBeenUsed[i] = 0; //Initialize all values to zero
    }

    //Assign random numbers to the board
    for (var i = 0; i < rows * columns; i++)
    {
        randomNumber = Math.floor(Math.random()*rows *columns);
        if (arrayHasNumberBeenUsed[randomNumber] == 0) //If random number is unique, add to the board.
        {
            arrayHasNumberBeenUsed[randomNumber] = 1;
            arrayofNumbers.push(randomNumber);
        }
        else 
        {
            i--;
        }
    }

    //Assign numbers to the GAME board
    count = 0;
    for (var i = 0; i<rows; i++)
    {
        for(var j = 0; j<columns; j++)
        {
            grid[i][j] = arrayofNumbers[count];
            count++;
        }
    }
    showTable();
}

function showTable()
{
    var num ="";
    for (var i = 0; i < rows; i++)
    {
        num += "<tr>";
        for (var j = 0; j < columns; j++)
        {
            //If current grid is blank space
            if (grid[i][j] == 0) 
            {
                num += "<td class=\"blank\"> </td>";
            }
            else
            {
                num+= "<td class=\"tile\" onclick=\"moveTile(" + i + ", " + j + ")\">" + grid[i][j] + "</td>";
            }
        }
        num += "</tr>";
    }
    table.innerHTML = num;
}

function moveTile(tableRow, tableColumn)
{
    if(legalClick(tableRow, tableColumn, "up") ||
       legalClick(tableRow, tableColumn, "down") ||
       legalClick(tableRow, tableColumn, "left") ||
       legalClick(tableRow, tableColumn, "right"))
    {
        increaseMoveCount();
    }
    else
    {
    }
    if(checkIfWinner())
    {
        alert("CONGRATULATIONS, the puzzle is solved in " + moves + " moves.");
        startNewGame();
    }
}

function legalClick(rowCoord, columnCoord, direction)
{
    rowOffset = 0;
    columnOffset = 0;
    if (direction == "up")
    {
        rowOffset = -1;
    }
    else if (direction == "down") 
    {
        rowOffset = 1;
    }
    else if  (direction == "left") 
    {
        columnOffset = -1;
    }
    else if  (direction == "right") 
    {
        columnOffset = 1;
    }

    //Checks if tile can be moved to the target spot. 
    //And if it can , move and return true
    if (rowCoord + rowOffset >= 0 && columnCoord + columnOffset >=0 && 
        rowCoord + rowOffset < rows && columnCoord + columnOffset < columns)
        {
            if(grid[rowCoord + rowOffset][columnCoord + columnOffset] == 0)
            {
                grid[rowCoord + rowOffset][columnCoord + columnOffset] = grid[rowCoord][columnCoord];
                grid[rowCoord][columnCoord] = 0;
                showTable();
                return true;
            }
        }
        return false;
}

function checkIfWinner()
{
    var count = 1;
    for (var i = 0; i < rows; i++)
    {
        for (var j = 0; j < columns; j++)
        {
            if(grid[i][j] != count)
            {
                if( !(count === rows * columns && grid[i][j] === 0)) 
                {
                    return false;
                }
            }
            count++;
        }
    }
    return true;
}

function increaseMoveCount()
{
    moves ++;
    if(textMoves) 
    {
        textMoves.innerHTML = moves;
    }
}
window.addEventListener( "load", start, false );