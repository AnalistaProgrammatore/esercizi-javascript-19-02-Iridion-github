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
  return operation(x, y, z)
}

if (true) {
  let z = 3
  if (true) {
    let z = 10
    let result = calculator('+', 12, 13)
  }
}