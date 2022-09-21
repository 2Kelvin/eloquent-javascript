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