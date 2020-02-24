/**
* 2) Scrivere nel file `mcd.js` la funzione `mcd(x, y)` e `mcdRecursive(x, y)` che implementi l'algoritmo di Euclide
* per il calcolo del massimo comun divisore tra due numeri. Per la funzione `mcdRecursive(x, y)` descrivere lo stack
* di chiamate ricorsive (per lo stack potete calcolare la successione ad un numero minore di 30 a vostra scelta
  **purchè nello stack compaiano almeno 4 chiamate ricorsive**)
**/

//versione normale, Massive Size per compensare la piccola taglia della ricorsiva. Explanation: https://www.youtube.com/watch?v=u0cpHFbqXLQ 
const mcd = (x, y) => {
  const commondDivs = []
  const xDivs = []
  const yDivs = []
  for (let a = 1; a <= x; a++) {
    if (x % a === 0) {
      if (!xDivs.includes(a)) xDivs.push(a)
      if (!xDivs.includes(x / a)) xDivs.push(x / a)
    }
  }
  let xDivsOrdered = xDivs.sort((x, y) => x - y)
  for (let a = 1; a <= y; a++) {
    if (y % a === 0) {
      if (!yDivs.includes(a)) yDivs.push(a)
      if (!yDivs.includes(y / a)) yDivs.push(y / a)
    }
  }
  let yDivsOrdered = yDivs.sort((x, y) => x - y)
  for (let x = 0; x < xDivsOrdered.length; x++) {
    if (yDivsOrdered.includes(xDivsOrdered[x]) && !commondDivs.includes(xDivsOrdered[x])) commondDivs.push(xDivsOrdered[x])
  }
  for (let x = 0; x < yDivsOrdered.length; x++) {
    if (xDivsOrdered.includes(yDivsOrdered[x]) && !commondDivs.includes(yDivsOrdered[x])) commondDivs.push(yDivsOrdered[x])
  }
  return commondDivs[commondDivs.length - 1]
}


//versione ricorsiva (oneliner come piace a Mister Marcoski, lmao)
const mcdRecursive = (x, y) => y === 0 ? x : mcdRecursive(y, x % y)

console.log(mcd(30, 50))
console.log(mcdRecursive(30, 50))

/*
_____________________________[ Descrizione ]_____________________________

AMBIENTE GLOBALE: {
  mcdRecursive = function
-------------------------------------------
  AMBIENTE MCDRECURSIVE (1° Chiamata): {
    x = 30
    y = 50
    y non è 0, quindi il return richiama la funzione con nuovi params
    -------------------------------------------
    AMBIENTE MCDRECURSIVE (2° Chiamata): {
      x = 50
      y = 30
      y non è 0, quindi il return richiama la funzione con nuovi params
      -------------------------------------------
      AMBIENTE MCDRECURSIVE (3° Chiamata): {
        x = 30
        y = 20
        y non è 0, quindi il return richiama la funzione con nuovi params
        -------------------------------------------
        AMBIENTE MCDRECURSIVE (4° Chiamata): {
          x = 20
          y = 10
          y non è 0, quindi il return richiama la funzione con nuovi params
          -------------------------------------------
          AMBIENTE MCDRECURSIVE (5° Chiamata): {
            x = 10
            y = 0
            y è 0, quindi la funzione ritorna x, cioè 10
          }
        }
      }
    }
  }
}
*/