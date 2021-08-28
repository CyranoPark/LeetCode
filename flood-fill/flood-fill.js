/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];
    const queue = [[sr, sc]];
    
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            const [y, x] = queue.shift();
            image[y][x] = newColor * -1;
            
            addQueue(y, x);
        }
    }
    
    image.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col < 0) {
                image[i][j] = -1 * col;
            }
        })
    })
    
    return image;
    
    function addQueue(i, j) {
        if (image[i - 1]?.[j] === color && image[i - 1]?.[j] >= 0) queue.push([i - 1, j]);
        if (image[i + 1]?.[j] === color && image[i + 1]?.[j] >= 0) queue.push([i + 1, j]);
        if (image[i][j - 1] === color && image[i][j - 1] >= 0) queue.push([i, j - 1]);
        if (image[i][j + 1] === color && image[i][j + 1] >= 0) queue.push([i, j + 1]);
    }
};