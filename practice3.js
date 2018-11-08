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

function listAllBlackShoes(inventory) {
  let output = '';
  inventory.forEach(designer => {
    let designerName = designer.name;
    let blackShoeArray = designer.shoes.filter(shoe => {
      return shoe.name.includes('black');
    });
    console.log(blackShoeArray)
    blackShoeArray.forEach(shoe => {
      output += `${designer.name},${shoe.name},${shoe.price}\n`
    })
  })
  return output.slice(0, -1);
}

listAllBlackShoes(inventory)
