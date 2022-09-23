// creates a new array and reverses the original array in it
function reverseArray(arrParam) {
    let newReverseArr = [];
    for (let arrItem of arrParam) {
        newReverseArr.unshift(arrItem);
    }
    return newReverseArr;
}

console.log(reverseArray(["A", "B", "C", "D"]));

// alters the original array by reversing it
function reverseArrayInPlace(array) {
    for (let item in array) {
        array.unshift(item); // ** fix this // doesnt't work // comeback to this later
    }
    return array;
}

// solution for reverseArrayInPlace; i did not get the logic
/*
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
 */

let arrayNums = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayNums);
console.log(arrayNums);