var grid;
var xspace;
var yspace;
var size = 4
var goal = [[1, 5, 9,13], [2, 6,10,14], [3, 7,11, 15], [4, 8,12,0]]

window.onload = function()
{
    var gridArea = document.getElementByClassName('puzzle-container');
    grid = gridArea.getElementsByTagName('div');
    for(i = 0; i<grid.length; i++)
    {
        var num = i;
        grid[num].innerHTML = num;
    }
}
function setUpGoal(target)
{
    for(i = 0; i<target.size; i++)
    {
        for(j = 1; j<target[i].length; j++)
        {
            target[i][0] = (i+1)
            target[i][j] = j*size+(i+1);
        }
    }
    target[size-1][size-1] = 0;
}

function setUpblankSpace()
{
    for(i=0; i<grid.length; i++)
    {
        for(j=0; j<grid[i].length; j++)
        {
            if(grid[i][j]==0){xspace = i; yspace=j}
        }
    }
}