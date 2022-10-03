// 'forEach' is a built in array method that works the same as a for loop/ keyword of
// it  loops through each item in the array
// it's a higher order function -> it takes in a call back function as an argument e.g.
let anArr = [1, 2, 3, 4, 5];
anArr.forEach(l => console.log(`I'm ${l}`));

// array.filter() method is a higher order function
// it takes in another function that specifies the element(s) to be filtered 
// filter() is a pure function i.e. it doesn't alter/ change/ modify the original e.g. array passed in
// it creates a new array with the filtered out elements 
// i.e. it returns a new array containing only the elements that pass the predicate function

// array.map() transforms an array by applying a function to all of its elements and building a new array from the returned values. 
// ...The new array will have the same length as the input array, 
// ...but its content will have been mapped to a new form by the function.
// map() transforms an array by putting each element through a function

// array.reduce() method computes a sum of all the items in the array
// it takes 2 arguments; a summing function and a start value
// If an array contains at least one element, you are allowed to leave off the start argument
// reduce() will take the first element of the array as its start value and start reducing at the second element
// *** reduce() combines (adds) all the elements in an array into a single value

// you can use forEach to loop over the elements in an array.
// some() method tests whether any element matches a given predicate function
// findIndex() finds the position/index of the first element that matches a predicate