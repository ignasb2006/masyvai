// Concat

console.log("// Concat");

const arr1 = ["Ignas","Martynas"];
const arr2 = ["Gytis","Julius"];

const concatArr1 = arr1.concat(arr2);
console.log(concatArr1);

const concatArr2 = arr1.concat("Ernestas");
console.log(concatArr2);

const concatArr3 = arr1.concat("Nojus","Naglis");
console.log(concatArr3);

// Every

console.log("// Every");

const everyArr = [23,40,20];

console.log(
    everyArr.every(
        (value) => value <= 40 
    )
);

// Fill

console.log("// Fill");

const fillArr1 = ["Bananas"];
fillArr1.fill("Oranges");
console.log(fillArr1);

const fillArr2 = ["Melon","Oranges","Bananas"];
fillArr2.fill("Bananas",1);
console.log(fillArr2);

const fillArr3 = ["","","","",""];
fillArr3.fill("Strawberries",0,5);
console.log(fillArr3);

// Filter

console.log("// Filter");

const filterArr = [10,11,5,20,98,7];
const filteredArr = filterArr.filter(
    (value) => value <= 10
);
console.log(filteredArr);

// Find

console.log("// Find");

const findArr = ["Bananas","Melons","Oranges","Strawberries"];
const findValue = findArr.find(
    (value) => value == "Oranges"
)
console.log(findValue);

// Find Index Of

console.log("// Find Index Of");

const findIndexArr = ["Bananas","Melons","Oranges","Strawberries"];
const findIndex = findIndexArr.findIndex(
    (value) => value == "Oranges"
)
console.log(findIndex);

// For Each

console.log("// For Each");

const forEachArr = ["Oranges","Melons","Strawberries"];
forEachArr.forEach(
    (value, index) => {
        console.log(`${value} index is ${index}`)
    }
)

// Includes

console.log("// Includes");

const includesArr = ["Oranges","Melons","Strawberries"];
const includes = includesArr.includes("Melons");
console.log(includes);

// Index Of

console.log("// Index Of");

const indexOfArr = ["Oranges","Melons","Strawberries"];
const indexOf = indexOfArr.indexOf("Melons");
console.log(indexOf);

// Join

console.log("// Join");

const joinArr = ["ABC","DEF","GHI"];
const joined = joinArr.join("-");
console.log(joined);

// Last Index Of

console.log("// Last Index Of");

const lastIndexOfArr = ["Oranges","Melons","Strawberries","Melons","Oranges"];
const lastIndex = lastIndexOfArr.lastIndexOf(
    "Melons"
)
console.log(lastIndex);

// Length

console.log("// Length");
const lengthArr = ["Oranges","Melons","Strawberries"];
console.log(lengthArr.length);

// Map

console.log("// Map");

const mapArr = [20,55,10,15];
const mappedArr = mapArr.map(
    (value) => value * 2
);
console.log(mappedArr);

// Pop

console.log("// Pop");

const popArr = ["Oranges","Melons","Strawberries"];
popArr.pop();
console.log(popArr);

// Push

console.log("// Push");

const pushArr1 = ["Oranges","Melons","Strawberries"];
pushArr1.push("Bananas");
console.log(pushArr1);

const pushArr2 = ["Oranges","Melons","Strawberries"];
pushArr2.push("Bananas","Blueberries");
console.log(pushArr2);

// Reduce

console.log("// Reduce")

const reduceArr1 = [5,2,7];
const reduced1 = reduceArr1.reduce(
    (prevValue, currentValue) => prevValue + currentValue
)
console.log(reduced1)

const reduceArr2 = [5,2,7];
const reduced2 = reduceArr1.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    20
)

console.log(reduced2)

// Reverse

console.log("// Reverse");

const reverseArr = ["Oranges","Melons","Strawberries"];
reverseArr.reverse();
console.log(reverseArr);

// To Reversed

console.log("// To Reversed");

const toReverseArr = ["Oranges","Melons","Strawberries"];
const toReversedArr = toReverseArr.toReversed();
console.log(toReversedArr);

// Shift

console.log("// Shift")

const shiftArr = ["Oranges","Melons","Strawberries"];
shiftArr.shift()
console.log(shiftArr);

// Slice

console.log("// Slice");

const sliceArr = ["Oranges","Melons","Strawberries"];
const slicedArr1 = sliceArr.slice(1);
console.log(slicedArr1);
const slicedArr2 = sliceArr.slice(0,1);
console.log(slicedArr2);

// Some

console.log("// Some");

const someArr = [60,43,45,77,34];

console.log(someArr.some(
    (value) => value < 50
))

// Sort

console.log("// Sort");

const sortArr = ["Cranberry","Orange","Apple","Banana"];
sortArr.sort(
    (a,b) => {
        if (a < b){
            return -1;
        } else if (a > b){
            return 1;
        } else {
            return 0;
        }
    }
)
console.log(sortArr);

// To Sorted

console.log("// To Sorted");

const toSortArr = ["Cranberry","Orange","Apple","Banana"];
const toSortedArr = toSortArr.toSorted(
    (a,b) => {
        if (a < b){
            return -1;
        } else if (a > b){
            return 1;
        } else {
            return 0;
        }
    }
)
console.log(toSortedArr);

// Splice

console.log("// Splice");

const spliceArr1 = ["Apple","Banana","Cranberry","Dragonfruit"];
spliceArr1.splice(2);
console.log(spliceArr1);
const spliceArr2 = ["Apple","Banana","Cranberry","Dragonfruit"];
spliceArr2.splice(0,2);
console.log(spliceArr2);
const spliceArr3 = ["Apple","Banana","Cranberry","Dragonfruit"];
spliceArr3.splice(2,2,"Carrot","Onion");
console.log(spliceArr3);

// Unshift

console.log("Unshift");

const unshiftArr = ["Banana","Cranberry","Dragonfruit"];

unshiftArr.unshift("Apple");

console.log(unshiftArr);