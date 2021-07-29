/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                count += 1;
                findLand(i, j);
            }
        }
    }
    
    return count;
    
    function findLand(i, j) {
        grid[i][j] = "0";
        
        if (grid[i + 1] && grid[i + 1][j] === "1") {
            findLand(i + 1, j);
        }
        if (grid[i][j + 1] === "1") {
            findLand(i, j + 1);
        }
        if (grid[i - 1] && grid[i - 1][j] === "1") {
            findLand(i - 1, j);
        }
        if (j && grid[i][j - 1] === "1") {
            findLand(i, j - 1);
        }
    }
    
};