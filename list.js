/**
* 6) Svolgere nel file `list.js` l'esercizio 3 del capitolo 4 di eloquentJS "A list"
------------------------------------------------------------------------------------
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument:
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
} 
Also write a listToArray function that produces an array from a list. 
Then add a helper function prepend, which takes an element and a list and creates a new list that 
adds the element to the front of the input list, and nth, which takes a list and a number and returns 
the element at the given position in the list (with zero referring to the first element) or 
undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
------------------------------------------------------------------------------------
**/

//Visto che sono meno solito usare la ricorsione, mi son costretto ad usarla per tutte le parti dell'esercizio come forma di allenamento.

const arrayToList = (arr) => arr.length === 0 ? null : { value: arr[0], rest: arrayToList(arr.filter((x, i) => i !== 0)) }
console.log(arrayToList(['stato', 'regione', 'città']))

const listToArray = (list, container) => {
  let arr = !container ? [] : container
  arr.push(list.value)
  return list.rest === null ? arr : listToArray(list.rest, arr)
}
console.log(listToArray(arrayToList(['stato', 'regione', 'città'])))

const prepend = (el, list) => ({ value: el, rest: list })
console.log(prepend('continente', arrayToList(['stato', 'regione', 'città'])))

const nth = (list, num) => !list ? undefined : num === 0 ? list.value : nth(list.rest, num - 1)
console.log(nth(arrayToList(['stato', 'regione', 'città']), 0))

