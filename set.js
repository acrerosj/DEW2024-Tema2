const mySet = new Set([1,2,3,4,5]);
console.log("Tiene el 3: ", mySet.has(3));
mySet.delete(4);
const myArray = [...mySet];
console.log(myArray);
const otherSet = new Set([4, 5, 6, 7]);

console.log('mySet: ',mySet);
console.log('otherSet: ',otherSet);

const unionSet = new Set([...mySet, ...otherSet]);
console.log("unión: ", unionSet);

let arrayIntersection = [...mySet].filter(e => otherSet.has(e));
const intersectionSet = new Set(arrayIntersection);
console.log('IntersectionSet: ', intersectionSet);

let arrayDiff = [...mySet].filter(e => !otherSet.has(e));
const differenceSet = new Set(arrayDiff);
console.log('DifferenceSet: ', differenceSet);