//Filter function

// const arr1 = ['user', 'admin', 'admin', 'user', 'admin', 'user', 'user', 'user', 'user', 'admin', 'admin', 'user'];

// const filter = function (arr1, cb) {
//     const newArr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (cb(arr1[i], i)) {
//             newArr.push(arr1[i]);
//         }
//     }
//     return newArr;
// };

// const funFilter = filter(arr1, (element, index) => {
//     return element === 'admin';
// });

// console.log(funFilter);



//Map function

// const arr1 = ['jf83urjf74jf', 'uejf83jfut75', 'ir84itjgut75u', 'jfue73urhfd8'];

// const map = function (arr1, cb) {
//     const newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i] + '-AM');
//     }
//     return newArr;
// }

// const funMap = map(arr1, (element) => {
//     return element;
// });

// console.log(funMap);



//Reduce function

// const arr1 = [150, 400, 200, 50, 300, 320, 500];

// const reduce = function (arr1, cb) {
//     const newArr = [];
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum = sum + arr1[i];
//         newArr.push(sum);
//     }
//     console.log(newArr);
//     return sum;
// };

// const reducer = reduce(arr1, (element) => {
//     return element;
// });

// console.log(reducer);




//Reverse function

// const num = +prompt("Enter the number");

// const reverse = function (num) {
//     const arr = [];
//     let concat = "";
//     for (let i = 0; num; i++) {
//         let temp = num % 10;
//         arr[i] = temp;
//         num = (num - temp) / 10;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         concat += arr[i];
//     }
//     return concat;
// };

// console.log(reverse(num));



//Palindrome check function

const value = prompt("Enter smth");

const palinCheck = function (value) {
    const arr = [];
    for (let i = 0; i < value.length; i++) {
        arr[i] = value.slice(i, i + 1);
    }
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return ("Not Palindrome");
        }
    }
    return ("IS Palindrome");
};

console.log(palinCheck(value));

