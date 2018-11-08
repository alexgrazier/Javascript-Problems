// function getProperty(obj, key) {
//   return obj[key];
// }

// const dog = {
// 	name: 'George',
//   age: 28,
// }

// obj.value === obj['value']

// function getProperty(obj, key) {
//   const value = obj[key];
// 	const upperValue = value.toUpperCase();
//   return upperValue;
// }

// document.body.innerHTML = getProperty(dog, 'name');


// const dog = {
// 	name: 'George',
//   age: 28,
// }

// function addProperty(obj, key) {
//   obj[key] = true;
// }

// addProperty(dog, 'alive');

// console.log(dog);

// console.log(dog['alive']);

// function checkAge(name, age) {
//   if (age < 21) {
//     return 'Go home, ' + name + '!';
//   } else {
//     return 'Welcome, ' + name + '!';
//   }
// }

// checkAge('Alex', 17);

// function addFullNameProperty(obj) {
//   obj['fullName'] = obj['firstName'] + ' ' + obj['lastName'];
//   return obj['fullName'];
// }

// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };

// console.log(addFullNameProperty(person));

// function addFullNameProperty(obj) {
//   return obj['fullName'] = obj['firstName'] + ' ' + obj['lastName'];

// let x = Math.PI;
// console.log(typeof x);

// const array = [1, 2, 3, 4];
// console.log(array.slice(1));
// console.log(array);

//console.log(array.splice(2));
//Answer to remove first item: return array.slice(1)



// for (let str[i], i < str.length, i++) {
//   if (str[i] === char) {

//   }
// }

// function getAllLetters(str) {
//   return str.split('');
// }

// var output = getAllLetters('Radagast');
// console.log(output)

// const exString = 'I am a hacker';


// function countCharacter(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// countCharacter(exString, 'a');

// const input = 'ask a bunch get a bunch';

// function countWords(str) {
//   const obj = {};
//   if (str === '') {
//     return {};
//   }
//   const words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (!obj[word]) {
//       obj[word] = 1;
//     } else {
//       obj[word]++;
//     }
//   }
// }
// return obj;
// }
// countWords(input);

// function countWords(str) {
//   const obj = {};
//   if (str === '') {
//     return {};
//   }
//   const words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (!obj.hasOwnProperty(word)) {
//       obj[word] = 1;
//     } else {
//       obj[word]++;
//     }
//   }
//   return obj;
// }

// if expression 1 is true, return true
// if expression 1 is false and expression 2 is true -- return true

// function or(expression1, expression2) {
//   if (expression1) {
//     return true;
//   }
//   if (!expression1 && expression2) {
//     return true
//   }
//   if (!expression1 && !expression2) {
//     return false;
//   }
// }

// function or(expression1, expression2) {
//   if (expression1) {
//     return true;
//   } else if (expression2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEitherEvenOrAreBoth7(num1, num2) {
//   return (num1 === 7 && num2 === 7) || (num1 % 2 === 0 || num2 % 2 === 0);
// }

// function extend(obj1, obj2) {
//   for (let obj2prop in obj2)
//     if (!obj1.hasOwnProperty(obj2prop)) {
//       obj1[obj2prop] = obj2[obj2prop]//add obj2prop to obj1
//     } 
// }


// var object = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// };

// console.log(object['a']);



// function giveProp (obj, num) {
//   for (let prop in obj) {
//     if (obj[prop] > num) {
//         delete prop[prop];
//       }
//     }
//   }
// }

// giveProp(object);

// function getIndexOf(char, str) {
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === char) {
//       return i;
//     }
//   }
//   if (!arr.includes(char)) {
//     return -1;
//   }
// }

// function getIndexOf(char, str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   if (!arr.includes(char)) {
//     return -1;
//   }
// }

// function getIndexOf(char, str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// function removeNumbersLargerThan(num, obj) {
//   for (let key in obj) {
//     if (obj[key] > num) {
//       delete obj[key];
//     }
//   }
// }

// function removeStringValuesLongerThan(num, obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'string') {
//       if (obj[key].length > num) {
//         delete obj[key];
//       }
//     }
//   }
// }

//074 countNumberOfKeys

// function countNumberOfKeys(obj) {
//   const arr = Object.keys(obj);
//   return arr.length;
// }

// //Alternative

// function countNumberOfKeys(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++
//   }
//   return count;
// }

// function removeArrayValues(obj) {
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       delete obj[key];
//     }
//   }
// }

// function addToFrontOfNew(arr, element) {
//   const newArray = [element];
//   return newArray.concat(arr);
// }

// function getElementsThatEqual10AtProperty(obj, key) {
//   const newArray = [];
//   const value = obj[key];
//   if (value === []) {
//     return [];
//   }
//   if (!Array.isArray(value)) {
//     return [];
//   }
//   if (obj.hasOwnProperty(value)) {
//     return [];
//   }
//   for (i = 0; i < value.length; i++) {
//     if (value[i] === 10) {
//       newArray.push(value[i]);
//     }
//   }
//   return newArray;
// }

// function getElementsThatEqual10AtProperty(obj, key) {
//   const newArray = [];
//   const value = obj[key];
//   if (!value) {
//     return newArray;
//   }
//   for (i = 0; i < value.length; i++) {
//     if (value[i] === 10) {
//       newArray.push(value[i]);
//     }
//   }
//   return newArray;
// }

// //Someone else's solution
// function getElementsThatEqual10AtProperty(obj, key) {
//   if (Array.isArray(obj[key])) {
//     return obj[key].filter(item => {
//       return item === 10;
//     });
//   }
//   return [];
// }

// function countAllCharacters(str) {
//   const obj { };
//   if (str === '') {
//     return obj;
//   }
//   const chars = str.split('');
//   for (let char of chars) {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
//   }
//   return obj;
// }

// function removeElement(array, discarder) {
//   return array.filter(element => {
//     return element !== discarder;
//   })
// }

// function getFirstElementOfProperty(obj, key) {
//   if (obj[key] && Array.isArray(obj[key])) {
//     return obj[key][0];
//   } else {
//     return undefined;
//   }
// }

// function getNthElementOfProperty(obj, key, n) {
//   if (Array.isArray(obj[key])) {
//     return obj[key][n];
//   } else {
//     return undefined;
//   }
// }

// function getLastElementOfProperty(obj, key) {
//   const arr = obj[key];
//   if (Array.isArray(arr)) {
//     return arr[arr.length-1];
//   } else {
//     return undefined;
//   }
// }

// function keep(array, keeper) {
//   return array.filter(element => {
//     return element === keeper;
//   })
// }

// function getOddLengthWordsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (Array.isArray(arr)) {
//     return arr.filter(element => {
//       return element.length % 2 === 1;
//     })
//   } else {
//     return [];
//   }
// }

// function computeAverageOfNumbers(nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   const sum = nums.reduce((total, num) => {
//     return total + num;
//   });
//   return sum/nums.length;
// }

// function getAverageOfElementsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (obj[key] === [] || !arr || !Array.isArray(arr)) {
//     return 0;
//   }
//   if (arr.length === 0) {
//     return 0;
//   }
//   if (Array.isArray(arr)) {
//     const sum = arr.reduce((total, current) => {
//       return total + current;
//     })
//     return sum/arr.length;
//   }
// }

// function getEvenLengthWordsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (Array.isArray(arr)) {
//     return arr.filter(element => {
//       return element.length % 2 === 0;
//     })
//   } else {
//     return [];
//   }
// }

// function filterOddLengthWords(words) {
//   return words.filter(word => {
//     return word.length % 2 === 1;
//   })
// }

// function getOddElementsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (Array.isArray(arr)) {
//     return arr.filter(element => {
//       return element % 2 === 1;
//     })
//   } else {
//     return [];
//   }
// }

//RETURN HERE -- USE REDUCE OR SORT?
// function getSmallestElementAtProperty(obj, key) {
//   const arr = obj[key];
//   let minElement = arr[0];
//   if (Array.isArray(arr)) {
//     arr.map(element => {
//       if (element < minElement) {
//         element = minElement;
//       }
//     })
//   } else {
//     return undefined;
//   }
//   return minElement;
// }

// function getLengthOfLongestElement(arr) {
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//       maxLength = arr[i].length;
//     }
//   }
//   return maxLength;
// }

// function getAllButLastElementOfProperty(obj, key) {
//   const arr = obj[key];
//   if (!Array.isArray(arr) || !arr) {
//     return [];
//   }
//   arr.pop();
//   return arr;
// }

// function getElementOfArrayProperty(obj, key, index) {
//   if (!Array.isArray(obj[key]) || !obj[key]) {
//     return undefined;
//   } else {
//     return obj[key][index];
//   }
// }

// function squareElements(arr) {
//   return arr.map(element => element ** 2)
// }

//Longer Version
// function squareElements(arr) {
//   return arr.map(element => {
//     return element**2;
//   })
// }

// function filterOddElements(arr) {
//   return arr.filter(element => element % 2 === 1);
// }

// function computeProductOfAllElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let product = 1;
//   for (element of arr) {
//     product = element * product;
//   }
//   return product;
// }

// function computeProductOfAllElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr.reduce((a, b) => a * b);
//   }
// }

// function computeProductofAllElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr.reduce((product, element) => product * element, 1);
//   }
// }
// //REDUCE has to know what to start wtih
// //two parameters: firs tparameter is a function it will apply to everything, 2nd parameter is seed(start)
// //first parameter is (product, element), second parameter is starting value - 1
// function select(arr, obj) {
//   const newObj = {};
//   for (let element of arr) {
//     if (obj.hasOwnProperty(element)) {
//       newObj[element] = obj[element]
//     }
//   }
//   return newObj;
// }

// function select(arr, obj) {
//   return arr.reduce((newObj, element) => {
//     if (obj.hasOwnProperty(element)) {
//       newObj[element] = obj[element];
//     }
//     return newObj;
//   }, {});
// }

// function getLengthOfLongestElement(arr) {
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//       maxLength = arr[i].length;
//     }
//   }
//   return maxLength;
// }


// //Refactoring using reduce
// function getLengthOfLongestElement(arr) {
//   return arr.reduce((maxLength, element) => {
//     if (element.length > maxLength) {
//       maxLength = element.length;
//     }
//     return maxLength;
//   }, 0);
// }

// function getLengthOfShortestElement(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr.reduce((shortLength, element) => {
//       if (element.length < shortLength) {
//         shortLength = element.length;
//       }
//       return shortLength;
//     }, Infinity);
//   }
// }


// function computeSumOfAllElements(arr) {
//   return arr.reduce((sum, element) => sum += element, 0);
// }

// function computeProductOfAllElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr.reduce((product, element) => product * element, 1);
//   }
// }

// var obj = {
//   key: [1, 2, 3, 4]
// };
// console.log(obj['key']);
// function getSmallestElementAtProperty(obj, key) {
//   const arr = obj[key];
//   return arr.reduce((minElement, element) => {
//     if (element < minElement) {
//       minElement = element;
//     }
//     return minElement;
//   }, Infinity);
// }

// var obj = {
//   key: [2, 1, 5]
// };
// getSmallestElementAtProperty(obj, 'key');

// function getSmallestElementAtProperty(obj, key) {
//   const arr = obj[key];
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//     return undefined;
//   } else {
//     return arr.reduce((minElement, element) => {
//       if (element < minElement) {
//         minElement = element;
//       }
//       return minElement;
//     }, Infinity);
//   }
// }

// function getProductOfAllElementsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//     return 0;
//   } else {
//     let product = 1;
//     for (element of arr) {
//       product *= element;
//     }
//     return product;
//   }
// }

// function getProductOfAllElementsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//     return 0;
//   } else {
//     return arr.reduce((product, element) => product *= element, 1)
//   }
// }

// function getLargestElementAtProperty(obj, key) {
//   const arr = obj[key];
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//     return undefined;
//   } else {
//     return arr.reduce((maxElement, element) => {
//       if (element > maxElement) {
//         maxElement = element;
//       }
//       return maxElement;
//     }, 0);
//   }
// }

// function getLongestElement(arr) {
//   return arr.reduce((longElement, element) => {
//     if (element.length > longElement.length) {
//       longElement = element;
//     }
//     return longElement;
//   }, '');
// }

// function findSmallestElement(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr.reduce((smallElement, element) => {
//       if (element < smallElement) {
//         smallElement = element;
//       }
//       return smallElement;
//     }, Infinity);
//   }
// }

// function findShortestElement(arr) {
//   if (arr.length === 0) {
//     return '';
//   } else {
//     return arr.reduce((shortElement, element) => {
//       if (element.length < shortElement.length) {
//         shortElement = element;
//       }
//       return shortElement;
//     }, arr[0]);
//   }
// }

// const array = ['a', 'two', 'three'];
// findShortestElement(array);

// function getLargestElement(arr) {
//   return arr.reduce((largeElement, element) => {
//     if (element > largeElement) {
//       largeElement = element;
//     }
//     return largeElement;
//   }, Number.NEGATIVE_INFINITY)
// }

// function joinArrayOfArrays(arr) {
//   let newArray = [];
//   for (element of arr) {
//     newArray = newArray.concat(element);
//   }
//   return newArray;
// }

// function joinArrayOfArrays(arr) {
//   return arr.reduce((newArray, element) => newArray.concat(element), []);
// }

// const array = [[1, 4], [true, false], ['x', 'y']];
// joinArrayOfArrays(array);

// const num = 15;
// console.log(String(num));

// function getSumOfAllElementsAtProperty(obj, key) {
//   const arr = obj[key];
//   if (!Array.isArray(arr) || !arr) {
//     return 0;
//   } else {
//     return arr.reduce((sum, element) => sum += element, 0);
//   }
// }

// function findShortestWordAmongMixedElements(arr) {
//   const shortestWord = arr.reduce((shortWord, element) => {
//     if (typeof element === 'string') {
//       if (typeof shortWord !== 'string' || element.length < shortWord.length) {
//         shortWord = element;
//       }
//     }
//     return shortWord
//   }, arr[0])
//   if (typeof shortestWord !== 'string') {
//     return '';
//   }
//   return shortestWord;
// }

// function getStringLength(string) {
//   let count = 0;
//   while (string[count]) {
//     count++
//   }
//   return count;
// }


// //Below also works, slightly longer:
// function getStringLength(string) {
//   let count = 0;

//   while (true) {
//     if (string[count]) {
//       count++;
//     } else {
//       return count;
//     }
//   }
// }

// function sumDigits(num) {
//   const stringValue = num.toString();
//   const arrValue = stringValue.split('');
//   if (arrValue[0] === '-') {
//     arrValue[1] = arrValue[0] + arrValue[1];
//     arrValue.shift();
//   }
//   let sum = 0;
//   for (let element of arrValue) {
//     sum += Number(element);
//   }
//   return sum;
// }

// function getLongestWordOfMixedElements(arr) {
//   return arr.reduce((longWord, element) => {
//     if (typeof element === 'string') {
//       if (typeof element !== 'string' || element.length > longWord.length) {
//         longWord = element;
//       }
//     }
//     return longWord
//   }, '');
// }

// //ERROR WITH TIES
// function findSmallestNumberAmongMixedElements(arr) {
//   const smallestNumber = arr.reduce((smallNumber, element) => {
//     if (typeof element === 'number') {
//       if (typeof element !== 'number' || element < smallNumber) {
//         smallNumber = element;
//       }
//     }
//     return smallNumber
//   }, arr[0]);
//   if (typeof smallestNumber !== 'number') {
//     return 0;
//   }
//   return smallestNumber;
// }

// function findSmallestNumberAmongMixedElements(arr) {
//   const numArray = arr.filter(element => typeof element === 'number');
//   if (arr.length === 0 || numArray.length === 0) {
//     return 0;
//   }
//   return numArray.reduce((smallNum, number) => {
//     if (number < smallNum) {
//       smallNum = number;
//     }
//     return smallNum;
//   }, Infinity)
// }

// function getLargestNumberAmongMixedElements(arr) {
//   const numArray = arr.filter(element => typeof element === 'number');
//   if (arr.length === 0 || numArray.length === 0) {
//     return 0;
//   }
//   return numArray.reduce((largeNum, number) => {
//     if (number > largeNum) {
//       largeNum = number;
//     }
//     return largeNum;
//   }, numArray[0])
// }

// function getLongestOfThreeWords(word1, word2, word3) {
//   if (word3.length > word2.length && word3.length > word1.length) {
//     return word3;
//   } else if (word2.length > word1.length) {
//     return word2;
//   } else {
//     return word1;
//   }
// }

// Alternate solutions using sort-- Return to these:
// //Hubert Lin
// function getLongestOfThreeWords(word1, word2, word3) {
//   var args = [...arguments]
//   return args.sort((a, b) => b.length - a.length)[0]
// }

// //Jake Preston
// function getLongestOfThreeWords(word1, word2, word3) {
//   var words = [word1, word2, word3]
//   words.sort((a, b) => a.length < b.length)
//   return words[0]
// }

// function findShortestOfThreeWords(word1, word2, word3) {
//   const arr = [word1, word2, word3];
//   return arr.reduce((shortWord, word) => {
//     if (word.length < shortWord.length) {
//       shortWord = word;
//     }
//     return shortWord;
//   }, arr[0])
// }

// const array = [4, 6, 5, 3];
// array.sort((a, b) => a - b)
// array.sort((a, b) => b - a)[0]

// function computeSummationToN(n) {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// computeSummationToN(4)

// function convertScoreToGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return 'A';
//   } else if (score >= 80 && score <= 89) {
//     return 'B';
//   } else if (score >= 70 && score <= 79) {
//     return 'C';
//   } else isf(score >= 60 && score <= 69) {
//     return 'D';
//   } else if (score >= 0 && score <= 59) {
//     return 'F';
//   } else {
//     return 'INVALID SCORE';
//   }
// }

//Better version:
// function convertScoreToGrade(score) {
//   if (score < 0 || score > 100) {
//     return 'INVALID SCORE';
//   } else if (score >= 90) {
//     return 'A';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// convertScoreToGrade(91)

// Examine this solution with Gabe:
// //Hubert Lin
// //Using {return `INVALID SCORE`}
// //Souldn't need additional break after return statement
// function convertScoreToGrade(score) {
//   if (score > 100 || score < 0) { return `INVALID SCORE` };
//   switch (true) {
//     case (score >= 90):
//       return 'A';
//       break;
//     case (score >= 80):
//       return 'B';
//       break;
//     case (score >= 70):
//       return 'C';
//       break;
//     case (score >= 60):
//       return 'D';
//       break;
//     default:
//       return 'F';
//   }
// }

// function convertScoreToGrade(score) {
//   switch (true) {
//     case (score >= 90):
//       return 'A';
//     case (score >= 80):
//       return 'B';
//     case (score >= 70):
//       return 'C';
//     case (score >= 60):
//       return 'D';
//     case (score >= 0):
//       return 'F';
//     default:
//       return 'INVALID SCORE';
//   }
// }

// function computeFactorialOfN(n) {
//   let product = 1;
//   for (let i = 2; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// }

// function repeatString(string, num) {
//   const arr = string.split('');
//   let concatArray = []
//   for (let i = 1; i <= num; i++) {
//     concatArray = concatArray.concat(arr);
//   }
//   return concatArray.join('');
// }

// repeatString('code', 3);

// function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
//   return principal * (1 + interestRate/compoundingFrequency) ** (compoundingFrequency * timeInYears) - principal;
// }

// function modulo(num1, num2) {
//   return num1 - Math.trunc(num1/num2) * num2;
// }

// //LONG VERSION - works with Math.trunc or Math.floor --> Correct use is Math.trunc
// function modulo(num1, num2) {
//   const n1 = Math.abs(num1);
//   const n2 = Math.abs(num2);
//   let remainder = n1 - Math.trunc(n1 / n2) * n2;
//   if (Math.sign(num1) === -1) {
//     return -remainder;
//   }
//   return remainder;
// }

// function multiply(num1, num2) {
//   const n1 = Math.abs(num1);
//   const n2 = Math.abs(num2);
//   let product = 0;
//   for (let i = 1; i <= n2; i++) {
//     product += n1;
//   }
//   if (Math.sign(num1) !== Math.sign(num2)) {
//     return -product;
//   }
//   return product;
// }

// function multiply(num1, num2) {
//   return num1 / (1 / num2);
// }

// function isOddWithoutModulo(num) {
//   return Math.abs(num - Math.trunc(num/2) * 2) === 1;
// }

// function isOddWithoutModulo(num) {
//  return !Number.isInteger(num / 2);
// }

// function isEvenWithoutModulo(num) {
//   return Number.isInteger(num / 2);
// }

// function multiplyBetween(num1, num2) {
//   let product = 1
//   for (let i = num1; i < num2; i++) {
//     product *= i;
//   }
//   if (num1 >= num2) {
//     return 0;
//   }
//   return product;
// }

// function computeSumBetween(num1, num2) {
//   let sum = 0;
//   for (let i = num1; i < num2; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function transformFirstAndLast(array) {
//   const obj = {};
//   obj[array[0]] = array[array.length-1];
//   return obj;
// }

// function fromListToObject(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     obj[array[i][0]] = array[i][1];
//   }
//   return obj;
// }

// const input = [
//   [
//     ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//     ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ];

// console.log(input[0][0])

// function fromListToObject(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     obj[array[i][0]] = array[i][1];
//   }
//   return obj;
// }

// function fromListToObject(input) {
//   const outputArray = [];
//   for (let j = 0; j < input.length; j++) {
//     const obj = {};
//     for (let i = 0; i < array.length; i++) {
//       obj[array[i][0]] = array[i][1];
//     }
//     return obj;


//   }

// }

// function transformEmployeeData(input) {
//   input.map(row => {
//     const obj = {};
//     for (let i = 0; i < array.length; i++) {
//       obj[array[i][0]] = array[i][1];
//     }
//     return obj;
//   })
// }


// function convertScoreToGradeWithPlusAndMinus(score) {
//   if (score > 100 || score < 0) { return `INVALID SCORE` };
//   let letter;
//   const secondDigit = score % 10;
//   let finalScore;

//   switch (true) {
//     case (score >= 90):
//       letter = 'A';
//       break;
//     case (score >= 80):
//       letter = 'B';
//       break;
//     case (score >= 70):
//       letter = 'C';
//       break;
//     case (score >= 60):
//       letter = 'D';
//       break;
//     default:
//       letter = 'F';
//       break;
//   }

//   if (secondDigit >= 0 && secondDigit <= 2 && score !== 100) {
//     finalScore = letter + '-';
//   } else if (score === 100 || secondDigit >= 8 && secondDigit <= 9) {
//     finalScore = letter + '+';
//   } else {
//     finalScore = letter;
//   }

//   if (score < 60) {
//     finalScore = letter;
//   }

//   return finalScore;
// }

// function getAllKeys(obj) {
//   return Object.getOwnPropertyNames(obj);
// }

// function listAllValues(obj) {
//   return Object.getOwnPropertyNames(obj).map(key => obj[key]);
// }

// let input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };

// function convertObjectToList(obj) {
//   const output = [];
//   for (let key in obj) {
//     output.push([key, obj[key]])
//   }
//   return output;
// }

// convertObjectToList(input)

// var customerData = {
//   'Joe': {
//     visits: 1
//   },
//   'Carol': {
//     visits: 2
//   },
//   'Howard': {
//     visits: 3,
//   },
//   'Carrie': {
//     visits: 4
//   }
// };

// function greetCustomer(firstName) {
//   if (!customerData.hasOwnProperty(firstName)) {
//     return 'Welcome! Is this your first time?';
//   }
//   const value = customerData[firstName].visits;
//   if (value === 1) {
//     return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
//   } else {
//     return `Welcome back, ${firstName}! So glad to see you again!`;
//   }
// }

// function assertEqual(actual, expected, testName) {
//     actual = JSON.stringify(actual);
//     expected = JSON.stringify(expected);

//     if (actual === expected) {
//         console.log("Passed");
//     } else {
//         console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
//     }
// }

// function assertEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);

//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
//   }
// }

// function assertArraysEqual(actual, expected, testName) {
//   var areEqualValues = actual.every(function(item, i) {
//     return item === expected[i];
//   });
//   var areEqualLength = (actual.length === expected.length);

//   if (areEqualLength && areEqualValues) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
//   }
// }

// function assertArraysEqual(actual, expected, testName) {
//   const areEqualValues = actual.every(function(item, i) {
//     return item === expected[i];
//   });
//   const areEqualLength = (actual.length === expected.length);

//   if (areEqualValues && areEqualLength) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
//   }
// }

// function assertObjectsEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);

//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
//   }
// }

// function assertWithinRange(low, high, actual, testName) {
//   if (low <= actual && high >= actual) {
//     console.log('passed');
//   } else {
//     console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
//   }
// }

// function square(n) {
//   return n * n;
// }

// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}]. Expected ${expected}, but got ${actual}`);
//   }
// }

// assertEqual(square(5), 25, 'should square a positive integer')
// assertEqual(square(-5), 25, 'should square a negative number')
// assertEqual(square(.5),.25, 'should square a decimal')
// assertEqual(square(0), 0, 'should square 0')

// function every(array, callbackFunction) {
//   var doesEveryElementMatch = true;
//   array.forEach(function(element) {
//     doesEveryElementMatch = callbackFunction(element);
//   });
//   return doesEveryElementMatch;
// }


// function assertEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);
  
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}`);
//   }
// }

// function isGreaterThanZero (num) {
//   return num > 0;
// }

// assertEqual(every([2, 4, 7], isGreaterThanZero), true, 'true when every element is greater than zero')
// assertEqual(every([4, -5, 6], isGreaterThanZero), false, 'false if any element is less than zero')
// assertEqual(every([3, 0, 4], isGreaterThanZero), false, 'false if any element is equal to zero')

// every([4, -5, 6], isGreaterThanZero)

// function map(array, callbackFunction) {
//   var newArray = [];
//   array.forEach(function(element) {
//     newArray = newArray + callbackFunction(element);
//   });
//   return newArray;
// }

// function cubeAll(numbers) {
//   return map(numbers, function(n) {
//     return n * n * n;
//   });
// }

// function assertArraysEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);
  
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
//   }
// }

// assertArraysEqual(cubeAll([2, 3, 4]), [8, 27, 64], 'cubes all positive numbers')

