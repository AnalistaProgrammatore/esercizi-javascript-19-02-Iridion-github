/**
 * 1) Scrivere nel file `fibonacci.js` la funzione ricorsiva di calcolo della serie 
 * di fibonacci per n = 30
 * https://it.wikipedia.org/wiki/Successione_di_Fibonacci
 * e descrivere lo Stack di chiamate ricorsive 
 * (per lo stack potete calcolare la successione ad un numero minore di 30
 * a vostra scelta **purchè nello stack compaiano almeno 4 chiamate ricorsive**)
**/

let acc = 1
let array = [0, 1]
const fibonacci = limit => {
  if (array[array.length - 1] >= limit) {
    return array
  } else {
    array.push(acc)
    acc = array[array.length - 2] + array[array.length - 1]
    return acc > limit ? array : fibonacci(limit)
  }
}
console.log(fibonacci(30))

/*
AMBIENTE GLOBALE: {
  acc = 1
  array = [0, 1]
  fibonacci = function
  console.log chiama fibonacci con param 30
-------------------------------------------
  AMBIENTE FIBONACCI (1° Chiamata): {
    limit = 30

    AMBIENTE ELSE: {
      array = [0, 1, acc] ---> [0, 1, 1]
      acc = 1 + 1 ---> 2
      return chiama ancora la funzione fibonacci
      -------------------------------------------
      AMBIENTE FIBONACCI (2° Chiamata): {
        limit = 30
        AMBIENTE ELSE: {
          array = [0, 1, 1, acc] ---> [0, 1, 1, 2]
          acc = 1 + 2 ---> 3
          return chiama ancora la funzione fibonacci
          -------------------------------------------
          AMBIENTE FIBONACCI (3° Chiamata): {
            limit = 30
            AMBIENTE ELSE: {
              array = [0, 1, 1, 2, acc] ---> [0, 1, 1, 2, 3]
              acc = 3 + 2 ---> 5
              return chiama ancora la funzione fibonacci
              -------------------------------------------
              AMBIENTE FIBONACCI (4° Chiamata): {
                limit = 30
                AMBIENTE ELSE: {
                  array = [0, 1, 1, 2, 3, acc] ---> [0, 1, 1, 2, 3, 5]
                  acc = 3 + 5 ---> 8
                  return chiama ancora la funzione fibonacci
                  -------------------------------------------
                  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                  >>> QUI CI SAREBBERO LE ALTRE RICORSIONI,  >>>>
                  >>> SKIPPO SINO ALLA CHIAMATA CHE RISPETTA  >>>
                  >>> LA CONDIZIONE D'USCITA >>>>>>>>>>>>>>>>>>>>
                  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                  -------------------------------------------
                  AMBIENTE FIBONACCI (7° Chiamata): {
                    limit = 30
                    AMBIENTE IF: {
                      return [0, 1, 1, 2, 3, 5, 8, 13, 21]
                    }
                  }
                -------------------------------------------
                }
              }
            -------------------------------------------
            }
          }
        -------------------------------------------
        }
      }
    -------------------------------------------
    }
  }
  console.log stampa [0, 1, 1, 2, 3, 5, 8, 13, 21]
}
*/
