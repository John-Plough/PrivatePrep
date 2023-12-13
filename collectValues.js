//in - arr of obj
//out - num (sum of all vals)

// [{a: 1, b: 2}, {c: 3, d: 4}, {e:10}]
//--> 20

// create sum var, set it equal to 0
// loop over arr
//loop over obj
//add vals to the sum variable
//return sum

function collectValues(arr) {
  let sum = 0;

  for (let obj of arr) {
    for (let key in obj) {
      sum += obj[key];
    }
  }

  return sum;
}

// 7.5 mins
// Perfect!
