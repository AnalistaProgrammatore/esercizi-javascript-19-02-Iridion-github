/**
* 5) Svolgere nel file `reverse.js` l'esercizio 2 del capitolo 4 di eloquentJs "Reverse an array".
* ------------------------------------------------------------------------------------------------
* For this exercise, write two functions, reverseArray and reverseArrayInPlace.
* The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
* The second, reverseArrayInPlace, does what the reverse method does: it modifies
* the array given as argument by reversing its elements.
* Neither may use the standard reverse method.
* Thinking back to the notes about side effects and pure functions in the previous chapter,
* which variant do you expect to be useful in more situations? Which one runs faster?
* -----------------------------------------------------------------------------------
* Sviluppare l'esercizio nella versione "Imperativa" cioè "Coma fare" e nella versione "Dichiarativa" cioè "Cosa fare"
* (tips: utilizzare la destrutturazione e lo spread operator per la versione "Dichiarativa". **NB le funzioni implementate devono essere pure**)
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO <--- come possono le funzioni del reverseArrayInPlace essere pure, se la differenza che hanno con reverseArray è proprio che non sono pure?
**/

//Versione Imperativa
const reverseArrayI = (arr) => {
  let result = []
  for (let x = arr.length - 1; x >= 0; x--) {
    result.push(arr[x])
  }
  return result
}

console.log('reverseArrayI() returns: ', reverseArrayI([1, 2, 3, 4, 5])) //This is the most useful one, and should also be faster.

//Versione Dichiarativa
const reverseArrayD = (arr) => arr.map((x, i) => arr[arr.length - (i + 1)])

console.log('reverseArrayD() returns: ', reverseArrayD([1, 2, 3, 4, 5]))

//Versione Imperativa
reverseArrayInPlaceI = (arr) => {
  const original = [...arr]
  for (let x = 0; x < original.length; x++) {
    arr[x] = original[original.length - 1 - x]
  }
  return arr
}

console.log('reverseArrayInPlaceI() returns: ', reverseArrayInPlaceI([1, 2, 3, 4, 5]))

//Versione Dichiarativa
const reverseArrayInPlaceD = (arr) => {
  const original = [...arr]
  arr.forEach((x, i) => arr[i] = original[original.length - (i + 1)])
  return arr
}

console.log('reverseArrayInPlaceD() returns: ', reverseArrayInPlaceD([1, 2, 3, 4, 5]))