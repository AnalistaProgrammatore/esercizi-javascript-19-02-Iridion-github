/*
** 3) Si descriva lo stack del seguente programma
*/

let z = 0
const opGenerator = function (symbol) {
  switch (symbol) {
    case '+':
      return (x, y) => x + y + z;
    case '-':
      return (x, y) => x - y + z;
    case '*':
      return (x, y) => x * y + z;
    case '/':
      return (x, y) => x / y + z;
  }
}

const calculator = function (symbol, x, y) {
  const operation = opGenerator(symbol)
  console.log('calculator - x is', x, 'y is', y, ', and z is', z)
  return operation(x, y, z)
}

if (true) {
  let z = 3
  if (true) {
    let z = 10
    let result = calculator('+', 12, 13)
    console.log(result)
  }
}

/*
_____________________________[ Commentino ]_____________________________

"Nooo, gli esercizi di pura descrizione sono BruZZih e Gattivih!" (quot. by Iridion - circa February 2020)

_____________________________[ Descrizione ]_____________________________

AMBIENTE GLOBALE: {
  z = 0
  opGenerator = function
  calculator = function
-------------------------------------------
  AMBIENTE DEL PRIMO IF: {
   z = 3
    AMBIENTE DEL SECONDO IF: {
    z = 10
      AMBIENTE DI CALCULATOR: {
        symbol = '+'
        x = 12
        y = 13

        AMBIENTE DI OPGENERATOR: {
          symbol = '+'
          la chiamata di questa funzione ritorna (x, y) => x + y + z
        }
        operation = function, sarebbe a dire ---> (x, y) => x + y + z
          AMBIENTE DI OPERATION: {
            x = 12
            y = 13
            z non è un parametro della funzione, e vale 0. Perchè ? Perchè è un caso di Scope Statico, ed Operation dipende da Calculator, che è dichiarata in Ambiente Globale, in cui z = 0
            la chiamata di questa funzione ritorna 12 + 13 + 0 ---> 25
          }
        la chiamata di questa funzione ritorna 25
      }
      result = 25
    }
  }
}
*/