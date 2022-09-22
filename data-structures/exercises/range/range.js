function range(firstNo, lastNo, step = (firstNo < lastNo) ? 1 : -1) {
    let anArray = [];
    if (step > 0) {
        for (let i = firstNo; i <= lastNo; i += step) {
            anArray.push(i);
        }
    } else {
        for (let i = firstNo; i >= lastNo; i += step) {
            anArray.push(i);
        }
    }
    return anArray;
}

console.log(range(1, 10, 2));

function sum(arrayParam) {
    let total = 0;
    for (let num of arrayParam) {
        total = total + num;
    }
    return total;
}

console.log(sum(range(1, 10)));

console.log(range(15, 8, -2)); 