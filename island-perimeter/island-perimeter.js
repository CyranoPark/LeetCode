/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                countEdge(i, j);
            }
            grid[i][j] = Math.abs(grid[i][j]);
        }
    }

    return count;
    
    function countEdge(i, j) {
        grid[i][j] = -1;
        
        if (hasLandCell(i - 1, j)) {
            countEdge(i - 1, j);
        }
        
        if (hasLandCell(i + 1, j)) {
            countEdge(i + 1, j);
        }
        
        if (hasLandCell(i, j - 1)) {
            countEdge(i, j - 1);
        }
        
        if (hasLandCell(i, j + 1)) {
            countEdge(i, j + 1);
        }
    }
        
    function hasLandCell(i, j) {
        if (!grid[i] || !grid[i][j]) {
            count += 1;
            return false;
        }
        
        if (grid[i][j] === -1) {
            return false;
        }
        
        return true;
    }
};