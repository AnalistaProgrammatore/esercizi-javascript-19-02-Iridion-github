/**
* 7) (opzionale solo per i più temerari) Svolgere nel file `deep.js` l'esercizio 5 di eloquenteJs "Deep Comparision"
--------------------------------------------------------------------------------------------------------------------
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare them.
--------------------------------------------------------------------------------------------------------------------
**/

//Daje, famose der male.

const deepEqual = (elem1, elem2, depth = 0, results = [], difference = "") => {
  if (typeof elem1 === "object" && typeof elem2 === "object") {
    if (Object.keys(elem1).length === Object.keys(elem2).length) {
      depth++
      for (let x = 0; x < Object.keys(elem1).length; x++) {
        elem1Key = JSON.stringify(Object.keys(elem1)[x])
        elem1Value = JSON.stringify(Object.values(elem1)[x])
        elem2Key = JSON.stringify(Object.keys(elem2)[x])
        elem2Value = JSON.stringify(Object.values(elem2)[x])
        results.push(elem1Key === elem2Key && elem1Value === elem2Value)
        if (results[results.length - 1] === false) {
          difference = "The first element differs from the second, at depth level [" + depth + "]: " + elem1Key + ": " + elem1Value + " | VS | " + elem2Key + ": " + elem2Value + "."
        }
        elem1Before = JSON.parse(elem1Value)
        elem2Before = JSON.parse(elem2Value)
      }
      return deepEqual(elem1Before, elem2Before, depth, results, difference)
    } else {
      return "Difference: at depth level [" + depth + "] the first element has " + Object.keys(elem1).length + " property/ies, the second element has " + Object.keys(elem2).length + "."
    }
  } else {
    return results.includes(false) ? difference : "The two elements are identical. Warning: the test is unable to detect differences in methods yet."
  }
}

const obj1 = {
  value3: {
    value2: {
      value1: {
        name: "mario",
        surname: "rossi",
        age: 55,
        married: true,
        extra: {
          min: true
        }
      }
    }
  }
}

const obj2 = {
  value3: {
    value2: {
      value1: {
        name: "mario",
        surname: "rossi",
        age: 55,
        married: true,
        extra: {
          min: true,
          different: true
        }
      }
    }
  }
}

console.log(deepEqual(obj1, obj2))
