/* function suOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}


const arrayUnfiltered = [1, 2, 3, 4, 5];
const arrayFiltered = arrayUnfiltered.filter(f);

function f(num){
    return num%2 === 0;
}

console.log(arrayFiltered);
console.log(arrayUnfiltered);

function multiplyByThree(num){
    return num * 3;
}

const arrayMultiplied = arrayFiltered.map(multiplyByThree);
console.log(arrayMultiplied);

function addSum (total, currentItem){
    return total + currentItem;
}

const returnSum = arrayMultiplied.reduce(addSum, 0);
console.log(returnSum);
*/

const numbers = [1, 2, 3, 4, 5];

const returnSum = numbers.filter(num => num%2 === 0).
                            map(num => num*3).
                            reduce((totala, currentItem) => totala + currentItem);
console.log(returnSum);