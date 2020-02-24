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

//Vicino alla soluzione, incompleto.

const deepEqual = (elem1, elem2) => {
  console.log("elem1 is", elem1, "and its type is ", typeof elem1)
  console.log("elem2 is", elem2, "and its type is ", typeof elem2)
  if (typeof elem1 === "object" && typeof elem2 === "object") {
    if (Object.keys(elem1).length === Object.keys(elem2).length) {
      let results = []
      for (let x = 0; x < Object.keys(elem1).length; x++) {
        elem1Overwrite = Object.values(elem1)[x]
        console.log("Inside the for elem1 is " + elem1Overwrite)
        elem2Overwrite = Object.values(elem2)[x]
        console.log("Inside the for elem2 is " + elem2Overwrite)
        results = [...results, elem1Overwrite === elem2Overwrite]
      }
      console.log(results)
      //return (results.length === Object.keys(elem1).length && results.includes(false)) ? false : deepEqual(elem1Overwrite, elem2Overwrite) questo dà sempre false
      return deepEqual(elem1Overwrite, elem2Overwrite) //questo dà sempre true
    } else {
      return false
    }
  } else {
    return elem1 === elem2 ? true : false
  }
}

const obj1 = {
  value3: {
    value2: {
      value1: {
        name: "mario",
        surname: "rossi",
        age: 55,
        married: true
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
        age: 65,
        married: true
      }
    }
  }
}

console.log(deepEqual(obj1, obj2))
