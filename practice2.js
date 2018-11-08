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
//output is object
// ouput = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// }; 

//Create designer array
//push into object output

//Below function also works
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

function calculateAveragePricePerDesigner(inventory) {
  let array = inventory.map(designer => {
    return {
      name: designer.name,
      averagePrice: getAveragePrice(designer.shoes)
    }
  })
  return {
    designers: array
  };
}

function getAveragePrice(shoeArr) {
  const sum = shoeArr.reduce((totalPrice, element) => {
    totalPrice += element.price;
    return totalPrice;
  }, 0);
  return sum / shoeArr.length;
}

calculateAveragePricePerDesigner(inventory)

