let matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
let diagonalOne = 0
let diagonalTwo = 0

function diagonalDifference (matrix){
  let matrixLength = matrix.length
  for(let row = 0; row < matrixLength; row++){
    for(let column = 0; column < matrix[row].length; column ++){
      //console.log(`[${row}][${column}] = ${matrix[row][column]}`)
      if(row === column){
        diagonalOne += matrix[row][column]
      }
      if(row + column === matrixLength - 1){
        //console.log('Validating the second diagonal')
        //console.log(`If [${row}] + [${column}] === ${matrixLength - 1}`)
        diagonalTwo += matrix[row][column]
      }
    }
  }
  console.log(`First diagonal = ${diagonalOne}`)  
  console.log(`Second diagonal = ${diagonalTwo}`)
  return Math.abs(diagonalOne - diagonalTwo)
}

console.log('Final Absolute: ' + diagonalDifference(matrix))
