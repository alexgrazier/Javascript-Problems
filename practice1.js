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
//Output
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, plain beige suede moccasin, 1000
// Gucci, black leather laced sneakers, 900

function renderInventory(inventory) {
  let output = '';
  inventory.forEach(designer => {
    let designerName = designer.name;
    designer.shoes.forEach(shoe => {
      output += `${designerName}, ${shoe.name}, ${shoe.price}\n`
    })
  })
  return output.slice(0, -1);
}

renderInventory(inventory)

console.log(renderInventory(inventory))
