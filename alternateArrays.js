// constraints: arrays always have the same size

function alternateArrays (arrays) {

    let arrayIntercalated = new Array;
    
    for (let j = 0; j < arrays[0].length; j++) { 
        
        for (let i = 0; i < arrays.length; i++) {
            arrayIntercalated.push(arrays[i][j]);
        }
        
    }
    
    return arrayIntercalated;
    
}

let alternatedArrays = alternateArrays([[1,1,1],[2,2,2],[3,3,3],[4,4,4]]);
console.log(alternatedArrays);
// output: [ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4 ]
