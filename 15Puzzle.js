var fifteenPuzzle = {
    grid,
    xspace,
    yspace,
    col:4,
    row:4,
    goal :[[1, 5, 9,13], [2, 6,10,14], [3, 7,11, 15], [4, 8,12,0]],
    
    FifteenPuzzle: function(){
        this.grid = new Array(rows);
        for(var i = 0; i<this.col; i++){
            this.grid[i] = goal.slice(0,col+1);
        }
        this.xspace = this.row -1;
        this.yspace = this.col - 1;
        for(var k = 0; k<10000; K++){
            moveTile((Math.random() * this.row), (Math.random() * this.col))
        };
    },

    legalClick: function(x,y){
        return Math.abs(x - this.xspace) + Math.abs(y - this.yspace) === 1;
    },

    finished: function(){
        for(var i = 0; i < this.row; i++){
            for(var k = 0; k<this.col; k++){
                if(this.grid[i][k]!= this.goal[i][k]){
                    return false;
                }
            }
            return true;
        }
    },

    moveTile: function(x,y){
        if (0 <= x && x < size && 0 <= y && y < size && legalClick(x, y)){
            this.grid[this.xspace][this.yspace] = this.grid[x][y];
            this.grid[x][y] = 0;
            this.xspace = x;
            this.yspace = y;
        }
    }
};