
//Push Function

// const pushMass = ["el1", "el2", "el3"];
// let elPush = "el4";

// const myPush = function (mass, elPush) {
//     pushMass[pushMass.length] = elPush;
//     return pushMass;
// }

// console.log(myPush(pushMass, elPush));




const arr1 = [8, 7, 66, 11, 15, 18, 1, 25, 31];

//Find function

// const find = function (arr1, cb) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (cb(arr1[i])) {
//             return arr1[i];
//         };
//     }
// }

// const found = find(arr1, (element) => {
//     console.log(element);
//     return element === 18;
// })



//FindIndex function

// const findIndex = function (arr1, cb) {
//     const newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (cb(arr1[i], i)) {
//             return arr1[i];
//         };
//     }
// }
// const foundIndex = findIndex(arr1, (element, index) => {
//     console.log(index);
//     return element > 18;
// })




//Every function

// const every = function (arr1, cb) {
//     const newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (cb(arr1[i], i, arr1)) {
//             newArr.push(arr1[i]);
//         };
//     }
//     if (newArr.length === arr1.length) {
//         return true;
//     } else {
//         return false
//     }
// }

// const foundEvery = every(arr1, (element, index, array) => {
//     return element > 10;
// })

// console.log(foundEvery);



//Some Function

const some = function (arr1, cb) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (cb(arr1[i], i, arr1)) {
            return true;
        };
    }
    return false
}

const foundSome = some(arr1, (element, index, array) => {
    return element > 0;
})

console.log(foundSome);


