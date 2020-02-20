/**
 * 1) Scrivere nel file `fibonacci.js` la funzione ricorsiva di calcolo della serie 
 * di fibonacci per n = 30
 * https://it.wikipedia.org/wiki/Successione_di_Fibonacci
 * e descrivere lo Stack di chiamate ricorsive 
 * (per lo stack potete calcolare la successione ad un numero minore di 30
 * a vostra scelta **purchè nello stack compaiano almeno 4 chiamate ricorsive**)
**/

const start = 30
let array = []
const cycles = 4
const fibonacci = (n) => {
  if (array.length > cycles) {
    return array
  } else {
    array.push(n)
    return fibonacci(n + (n - 1))
  }
}
console.log(fibonacci(start))

/*
AMBIENTE GLOBALE: {
  start = 30
  array = array
  cycles = 4
  AMBIENTE FIBONACCI (1° Chiamata): {
    n = 30
    array = [30]
    AMBIENTE ELSE: {
      AMBIENTE FIBONACCI (2° Chiamata): {
        n = 59
        array = [ 30, 59 ]
        AMBIENTE ELSE: {
            AMBIENTE FIBONACCI (3° Chiamata): {
              n = 117
              array = [ 30, 59, 117 ]
              AMBIENTE ELSE: {
                AMBIENTE FIBONACCI (4° Chiamata): {
                  n = 233
                  array = [ 30, 59, 117, 233 ]
                    AMBIENTE ELSE: {
                      AMBIENTE FIBONACCI (5° Chiamata): {
                        n = 465
                        array = [ 30, 59, 117, 233, 465 ]
                          AMBIENTE ELSE: {
                            AMBIENTE FIBONACCI (6° Chiamata): {
                              n = 929
                                AMBIENTE IF: {
                                return [ 30, 59, 117, 233, 465 ]
                              }
                            }
                          return [ 30, 59, 117, 233, 465 ]
                        }
                      }
                    return [ 30, 59, 117, 233, 465 ]
                  }
                }
                return [ 30, 59, 117, 233, 465 ]
              }
            }
          return [ 30, 59, 117, 233, 465 ]
        }
      }
      return [ 30, 59, 117, 233, 465 ]
    }
  }
}
*/
