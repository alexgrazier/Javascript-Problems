// function addFullNameProp(obj) {
//   var firstName = obj.firstName;
//   var lastName = obj.lastName;

//   if (firstName && lastName) {
//     obj['fullName'] = firstName + ' ' + lastName;
//   }

//   return obj;
// }

// function assertObjectsEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);

//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}]. Expected ${expected}, but got ${actual}`);
//   }
// }


// let inputObj = {
//   firstName: 'Alex',
//   lastName: 'Grazier'
// };

// let expectedOut = {
//   firstName: 'Alex', 
//   lastName: 'Grazier',
//   fullName: 'Alex Grazier'
// }

// addFullNameProp(inputObj)

// Skeleton
// function average(numbers) {
//   return sum(numbers)/numbers.length;
// }

// function sum(numbers) {
//   return numbers.reduce((total, num) => {
//     return total += num;
//   }, 0);
// }

// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}]. Expected ${expected}, but got ${actual}`);
//   }
// }

// const input1 = [1, 2, 4, 8, 2, 1];
// const input2 = [-2, -1, -3]
// const input3 = [-2, 4, 4]

// assertEqual(average(input1), 3, 'returns average of integers in numbers array')
// assertEqual(average(input2), -2, 'returns average of array of negative integers')
// assertEqual(average(input3), 2, 'returns average of mixed positive and negative integers in numbers array')


// //If want output of empty array to be 0, need to alter average function to have a condition to return 0 if numbers.length < 1

// function getRandomAge(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// function decorateClassListWithAges(classList) {
//   const classListWithAges = [];
//   for (let i = 0; i < classList.length; i++) {
//     const obj = {};
//     obj.name = classList[i];
//     obj.age = getRandomAge(10, 11)
//     classListWithAges.push(obj);
//   }
//   return classListWithAges;
// }

// let classList = ["Joe", "Jack", "John", "Fred"];
// let classListWithAges = decorateClassListWithAges(classList);


// function assertWithinRange(low, high, actual, testName) {
//   if (actual >= low && actual <= high) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}], ${actual} not within range ${low} to ${high}`);
//   }
// }

// assertWithinRange(10, 11, classListWithAges[0].age, 'check age of first student is between 10 and 11')

// function assertEqual (actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);

//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
//   }
// }

// assertEqual(typeof classListWithAges[0], 'object', 'check that first element of output array is object')

// assertEqual(Array.isArray(classListWithAges), true, 'check that output is an array')

// assertEqual((classListWithAges[0].hasOwnProperty('name') && classListWithAges[0].hasOwnProperty('age')), true, 'check that first object in array has both a name and an age property')

// function isIsogram(text) {
//   const set1 = new Set(text.toLowerCase());
//   return set1.size === text.length; 
// }

// function assertEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);

//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
//   }
// }

// const isogramInput = 'diet';
// const notIsogramInput = 'suckers';
// const mixedCaseIsogramInput = 'fLEck';
// const mixedCaseNotIsogramInput = 'grOSS';
// const emptyStringInput = '';

// assertEqual(isIsogram(isogramInput), true, 'lowercase isogram should return true')
// assertEqual(isIsogram(notIsogramInput), false, 'non-isogram input should return false')
// assertEqual(isIsogram(mixedCaseIsogramInput), true, 'isogram with mixed case should return true')
// assertEqual(isIsogram(mixedCaseNotIsogramInput), false, 'non-isogram input with mixed case should return false')
// assertEqual(isIsogram(emptyStringInput), true, 'should assume empty string is isogram')

// const chars = 'recipes'.split('');
// console.log(chars)

// function findMaxRepeatCountInWord(word) {
//   const chars = word.split('')
//   const obj = {};

//   for (let i = 0; i < chars.length; i++) {
//     const char = chars[i]
//     if (!obj.hasOwnProperty(char)) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
//   }
//   const countArray = Object.values(obj);
//   return countArray.reduce((maxCount, element) => {
//     if (element > maxCount) {
//       maxCount = element;
//     }
//     return maxCount;
//   }, countArray[0]);
// }

// function findFirstWordWithMostRepeatedChars(text) {
//   let maxRepeatCountOverall = 0;
//   let wordWithMaxRepeatCount = '';

//   let words = text.split(' ');
//   for (let word of words) {
//     var repeatCountForWord = findMaxRepeatCountInWord(word);
//     if (repeatCountForWord > maxRepeatCountOverall) {
//       maxRepeatCountOverall = repeatCountForWord;
//       wordWithMaxRepeatCount = word;
//     }
//   }
//   return wordWithMaxRepeatCount;
// }

// var input = 'foo bar bazz';
// findFirstWordWithMostRepeatedChars(input)

// function assertStringsEqual (actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}`);
//   }
// }

// assertStringsEqual(findFirstWordWithMostRepeatedChars('blal tlah dhah'), 'blal', 'should return first of multiple words with same number of repeated characters')
// assertStringsEqual(findFirstWordWithMostRepeatedChars('bbip dinnnnng'), 'dinnnnng', 'should return word with most repeated characters')
// assertStringsEqual(findFirstWordWithMostRepeatedChars(''), '', 'empty string should return empty string')

//Test input
// const input = 'Our civic duty is to kayak';
// const input2 = 'Our civic duty is to kayak without a rotator as you well know';
// const input3 = 'Our civic duty is to kayak without a RoTaToR as you well know';

// function findLongestPalindrome(sentence) {
//   const words = sentence.split(' ');
//   const palArray = words.filter(ele => {
//     return isPalindrome(ele);
//   });
//   return palArray.sort((a, b) => a.length - b.length)[palArray.length - 1];
// }

// function reverseString(string) {
//   return string.split('').reverse().join('');
// }

// function isPalindrome(word) {
//   return word === reverseString(word);
// }

// findLongestPalindrome(input3)//correctoutput

// function sortAscendingByLength(a, b) {
//   const arr = [...arguments]
//   return arr.sort((a, b) => a.length - b.length)
// } //functions works, but have not figured out how to incorporate into main function, easier to have it inline

// var inventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       { name: 'tasselled black low-top lace-up', price: 1000 },
//       { name: 'tasselled green low-top lace-up', price: 1100 },
//       { name: 'plain beige suede moccasin', price: 950 },
//       { name: 'plain olive suede moccasin', price: 1050 }
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       { name: 'red leather laced sneakers', price: 800 },
//       { name: 'black leather laced sneakers', price: 900 }
//     ]
//   }
// ];
// //Output
// // Brunello Cucinelli, tasselled black low-top lace-up, 1000
// // Brunello Cucinelli, plain beige suede moccasin, 1000
// // Gucci, black leather laced sneakers, 900

// function renderInventory(inventory) {
//   let output = '';
//   inventory.forEach(designer => {
//     let designerName = designer.name;
//     designer.shoes.forEach(shoe => {
//       output += `${designerName}, ${shoe.name}, ${shoe.price}\n`
//     })
//   })
//   return output.slice(0, -1);
// }

// renderInventory(inventory)

// console.log(renderInventory(inventory))

// function calculateAveragePricePerDesigner(inventory) {
//   let desArray = inventory.map(designer => {
//     const result = {
//       'name': designer.name,
//       'averagePrice': getAveragePrice(designer.shoes)
//     }
//     return result;
//   });
//   return {
//     designers: desArray
//   };
// }

// function getAveragePrice(shoeArr) {
//   const sum = shoeArr.reduce((totalPrice, element) => {
//     totalPrice += element.price;
//     return totalPrice;
//   }, 0);
//   return sum / shoeArr.length;
// }

// calculateAveragePricePerDesigner(inventory)

// function listAllBlackShoes(inventory) {
//   let output = '';
//   inventory.forEach(designer => {
//     let designerName = designer.name;
//     let blackShoeArray = designer.shoes.filter(shoe => {
//       return shoe.name.includes('black');
//     });
//     blackShoeArray.forEach(shoe => {
//       output += `${designer.name},${shoe.name},${shoe.price}\n`
//     })
//   })
//   return output.slice(0, -1);
// }

// listAllBlackShoes(inventory)

// function createLaceInventory (inventory) {
//   let outputDescriptions = [];
//   inventory.forEach(designer => {
//     let descriptions = designer.shoes.filter(shoe => {
//       return shoe.name.includes('lace');
//     })
//     descriptions.forEach(shoe => {
//       outputDescriptions.push(shoe.name.split(' '))
//     })
//   })
//   let output = outputDescriptions.map(element => {
//     return {
//       'nameWords': element,
//       'targetWordIndex': element.findIndex(word => word.includes('lace'))
//     };
//   })
//   return output;
// }

// createLaceInventory(inventory)

// function assertLengthEqual (actual, expected, testName) {
//   if (actual.length === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}`);
//   }
// }

// assertLengthEqual(createLaceInventory(inventory), 4, 'should have a length of 4')
