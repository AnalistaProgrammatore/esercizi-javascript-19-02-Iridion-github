/**
* 4) Svolgere nel file `range.js` l'esercizio 1 del capitolo 4 di eloquentJs "Sum of a range"
* Muzunna ragasi, sti pigroni che elargiscono gli esercizi, manco un copiaincolla qua sotto eh:
* ---------------------------------------------------------------------------------------------
* .1
* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
* .2
* Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
* Run the example program and see whether it does indeed return 55.
* .3
* As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
* If no step is given, the elements go up by increments of one, corresponding to the old behavior.
* The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
* Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
* ------------------------------------------------------------------------------------------------
**/

const range = (start, end, step = 1) => {
  let result = []
  for (let x = start; start < end ? x <= end : x >= end; x += step) {
    result = [...result, x]
  }
  return result
}

const sum = (arr) => {
  let result = 0
  for (let x = 0; x < arr.length; x++) {
    result += arr[x]
  }
  return result
}

console.log('Standard case:', sum(range(1, 10, 1)))
console.log('Greater step case:', sum(range(1, 10, 2)))
console.log('Negative step case:', sum(range(5, 2, -1)))
