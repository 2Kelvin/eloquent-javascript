let journal = [];

function addEntry(dayEvents, turnedSquirrel) {
    journal.push({ dayEvents, turnedSquirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phiCoefficient(tableArrayParam) {
    return (tableArrayParam[3] * tableArrayParam[0] - tableArrayParam[2] * tableArrayParam[1]) /
        Math.sqrt((tableArrayParam[2] + tableArrayParam[3]) * (tableArrayParam[0] + tableArrayParam[1]) * tableArrayParam[1] + tableArrayParam[3]) * (tableArrayParam[0] + tableArrayParam[2]);
}

console.log(phiCoefficient(76, 9, 4, 1));

// looping over all the entries and tallying how many times a dailyEvent occurs in relation to squirrel transformations
function tableFor(event, myJournal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < myJournal.length; i++) {
        let entry = myJournal[i], index = 0;
        if (entry.dayEvents.includes(event)) index += 1; //"includes()" checks whether a given value exists -> in this case, in the array
        if (entry.turnedSquirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", journal));

function journalEvents(journalParam) {
    let events = [];
    for (let entry of journalParam) {
        for (let event of entry.dayEvents) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(journal));

for (let event of journalEvents(journal)) {
    console.log(event + ":", phiCoefficient(tableFor(event, journal)));
}

for (let event of journalEvents(journal)) {
    let correlation = phiCoefficient(tableFor(event, journal));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

for (let entry of journal) {
    if (entry.dayEvents.includes("peanuts") &&
        !entry.dayEvents.includes("brushed teeth")) {
        entry.dayEvents.push("peanut teeth");
    }
}
console.log(phiCoefficient(tableFor("peanut teeth", journal)));


// methods for adding and removing things at the start of an array are called "unshift" and "shift"
// "shift()" removes the 1st element in an array and returns it
// "unshift()" inserts new elements at the start of an array & returns the length of the new array
let todoList = [];
console.log(todoList.unshift("sleep", "code", "study", "blog", "dance"));
console.log(todoList.shift());
console.log(todoList);

// search for a specific value in an array using "indexOf()" method
// ... it searches from the start to the end of the array and returns the index the searched item
// ... if the item wasn't found in the array, it returns -1
// "lastIndexOf()" does the same thing as 'indexOf()' but searches the array from the end to the start instead
// NOTE: indexOf() & lastIndexOf() return the 1st instance of the value passed to them (in a situation where the same value happens to be more than one in the array)
// Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching

// "slice()" -> takes start and end indices and returns an array that has only the elements between them. 
// ...The start index is inclusive, the end index exclusive.
// if you include one index in slice(), it'll return the an array with values from that index to the end
// using slice() with no param index(es) copies the entire array

// concat() method is used to glue arrays together to create a new array.
// ... similar to what the + operator does for strings.
// If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.

// basic data types: strings, numbers, booleans have built in properties and methods
// examples of string methods: slice(), indexOf(), trim(), padStart(), split(), join(), repeat()
// string.indexOf() can search more than one character in the string
// string.trim() removes whitespaces, tab, newlines from the string
let sentence = "Just do it";
let motto = sentence.split(" "); // split returns an array of the splitted string
console.log(motto);
console.log(motto.join("|"));

// when passing an array to a function so that each element in the array can be used as a different argument,
// ...use the "spread operator" "..." to do so

// just like using '[]' allows you to look inside an array and access that value,
// ...using '{}' allows you to access an object's property -> this is called destructuring

// ARRAY LOOPS SHORTCODE
// original code
for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // Do something with entry
}
// shortcode
for (let entry of JOURNAL) {
    //do something
}
// both codes above do the same thing; i.e. loop through each item in the journal array
// ...keyword 'of' makes this possible