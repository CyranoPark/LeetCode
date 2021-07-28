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
        }
    }
    
    function countEdge(i, j) {
        count += 4;
        
        if (hasLandCell(i - 1, j)) {
            // countEdge(i - 1, j);
            count -= 1;
        }
        
        if (hasLandCell(i + 1, j)) {
            // countEdge(i + 1, j);
            count -= 1;
        }
        
        if (hasLandCell(i, j - 1)) {
            // countEdge(i, j - 1);
            count -= 1;
        }
        
        if (hasLandCell(i, j + 1)) {
            // countEdge(i, j + 1);
            count -= 1;
        }
    }
        
    function hasLandCell(i, j) {
        if (!grid[i] || !grid[i][j]) {
            return false;
        }
        
        return true;
    }
    
    return count;
    
};