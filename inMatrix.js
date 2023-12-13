//in- array of arrs, value
//boolean
//seach thru all array els, and determine if the input val is present

//let matrix = [      // 9 --> true
//   [0, 0, 1],       // 4 --> false
//   [2, 1, 9],
//   [0, 0, 0],
// ];

//loop thru array (every row)
//loop thru each cell
//if we find val, return true
//haven't found val, we return false

function inMatrix(matrix, val) {
  for (let row of matrix) {
    for (let cell of row) {
      if (cell === val) {
        return true;
      }
    }
  }

  return false;
}

function inMatrix(matrix, val) {
  for (let row of matrix) {
    if (row.includes(char)) {
      return true;
    }
  }
  return false;
}

// 7 mins
// Perfect!
