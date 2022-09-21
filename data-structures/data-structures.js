let Mon2nd = {
  turnedSquirrel: false,
  activities: ["work", "touched tree", "ate pizza", "running"],
};

// The binary "in" operator, when applied to a string and an object, tells you whether that object has a property with that name (it returns either 'true' or 'false') e.g.
console.log("activities" in Mon2nd);
// To find out what properties an object has, you can use the "Object.keys" function
console.log(Object.keys(Mon2nd));
// ... it returns an array of strings; the strings are the object's property names
// "Object.assign" function copies all properties from one object into another e.g.
Object.assign(Mon2nd, { turnedWereWolf: false });
console.log(Mon2nd);
//  an array is just an object that stores data e.g.
let dailyLogEnteries = [];
console.log(typeof dailyLogEnteries);
// comparing objects with JavaScript’s == operator, compares them by 'identity'
// ...it produces 'true' only if both objects are precisely the same value e.g.
let cat1 = { color: "Grey" };
let cat2 = cat1;
console.log(cat1 == cat2); // -> results to true because they point to the same object
// Comparing different objects will return false, even if they have identical properties e.g.
let cat3 = { color: "Grey" };
console.log(cat3 == cat1); //-> results to false because they are 2 different objects that contain similar properties
// though a const binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change. e.g.
const dog = {
  breed: "Chihuahua",
  name: "Number2",
  owner: "Kagami"
};
dog.owner = "Tetsu";
console.log(dog);
// DO NOT change the object values like this: dog = { breed: "Poodle", name: "Number2", owner: "Tetsu"}