/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0;
    
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[i].includes(1)) {
            count++;
            countProvince(i);    
        }
    }
    
    return count;
    
    function countProvince(city) {
        isConnected[city].forEach((connected, j) => {
            if (connected) {
                isConnected[city][j] = 0;
                countProvince(j)
            }
        })
    }
    
};