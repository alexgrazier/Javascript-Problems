//first filter to create new Array
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

// output = [
//   {
//     "nameWords": ["tasselled", "black", "low-top", "lace-up"],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": ["tasselled", "green", "low-top", "lace-up"],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": ["red", "leather", "laced", "sneakers"],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": ["black", "leather", "laced", "sneakers"],
//     "targetWordIndex": 2
//   }
// ] 

function createLaceInventory(inventory) {
  const outputDescriptions = [];
  inventory.forEach(designer => {
    designer.shoes.forEach(shoe => {
      const nameWords = shoe.name.split(' ');
      const targetWordIndex = nameWords.findIndex(word => word.includes('lace'));
      if (targetWordIndex > -1) {
        outputDescriptions.push({
          nameWords, //same as nameWords: nameWords
          targetWordIndex, //same as targetWordIndex: targetWordIndex
        })
      }
    })
  })
  return outputDescriptions;
}

createLaceInventory(inventory)

// function assertLengthEqual (actual, expected, testName) {
//   if (actual.length === expected) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}`);
//   }
// }

// assertLengthEqual(createLaceInventory(inventory), 4, 'should have a length of 4')
