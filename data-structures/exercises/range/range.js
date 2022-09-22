function range(firstNo, lastNo) {
    let anArray = [];
    for (let i = firstNo; i <= lastNo; i++) {
        anArray.push(i);
    }
    return anArray;
}

console.log(range(11, 34));