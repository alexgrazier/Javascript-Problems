//Note: Left in console.log checks throughout functions to practice using these
var salesTeam = [{ name: { first: 'Aleen', last: 'Atkins' }, age: 26, sales: '$2314' },
{ name: { first: 'Alvaro', last: 'Angelos' }, age: 55, sales: '$1668' },
{ name: { first: 'Denese', last: 'Dossett' }, age: 29, sales: '$9248' },
{ name: { first: 'Douglas', last: 'Denney' }, age: 53, sales: '$5058' },
{ name: { first: 'Earline', last: 'Erickson' }, age: 19, sales: '$18876' },
{ name: { first: 'Herman', last: 'Hazell' }, age: 25, sales: '$2746' },
{ name: { first: 'Homer', last: 'Hirth' }, age: 26, sales: '$474' },
{ name: { first: 'Hwa', last: 'Heidt' }, age: 53, sales: '$9607' },
{ name: { first: 'Hyon', last: 'Hampshire' }, age: 46, sales: '$13598' },
{ name: { first: 'Issac', last: 'Ingerson' }, age: 45, sales: '$5225' },
{ name: { first: 'Jeraldine', last: 'Joplin' }, age: 39, sales: '$2891' },
{ name: { first: 'Jin', last: 'Jeffrey' }, age: 17, sales: '$14402' },
{ name: { first: 'Joleen', last: 'Jolin' }, age: 45, sales: '$15736' },
{ name: { first: 'Jude', last: 'Jarrett' }, age: 53, sales: '$7557' },
{ name: { first: 'Magda', last: 'Mireles' }, age: 18, sales: '$1498' },
{ name: { first: 'Mistie', last: 'Montealegre' }, age: 31, sales: '$6920' },
{ name: { first: 'Nancy', last: 'Napoli' }, age: 49, sales: '$5255' },
{ name: { first: 'Regine', last: 'Rohrbaugh' }, age: 33, sales: '$7881' },
{ name: { first: 'Rolando', last: 'Riebel' }, age: 35, sales: '$8573' },
{ name: { first: 'Scarlett', last: 'Stagg' }, age: 36, sales: '$7126' },
{ name: { first: 'Sherron', last: 'Strawn' }, age: 36, sales: '$8848' },
{ name: { first: 'Susan', last: 'Shilling' }, age: 29, sales: '$8542' },
{ name: { first: 'Tama', last: 'Tworek' }, age: 16, sales: '$9200' },
{ name: { first: 'Tonisha', last: 'Taunton' }, age: 41, sales: '$5219' },
{ name: { first: 'Vergie', last: 'Villescas' }, age: 25, sales: '$8712' }];


//PART 1
//input: array of objects
//output: array of strings with name properties for each person with age between 13 & 19
function isTeenager(salesTeam) {
  const teenArray = salesTeam.filter(person => {
    // console.log(person);
    return person.age >= 13 && person.age <= 19;
  });
  // console.log(teenArray);
  return teenArray.map(teen => {
    return `${teen.name.first} ${teen.name.last}`;
  });
}

//Could also chain together without creating separate array - harder to check along the way
function isTeenager(salesTeam) {
  return teenArray = salesTeam.filter(person => {
    return person.age >= 13 && person.age <= 19;
  }).map(teen => {
    return `${teen.name.first} ${teen.name.last}`;
  });
}

isTeenager(salesTeam)//Correct output


//PART2 - TESTING
function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
  } else {
    console.log('Test [' + testName + '] failed: expected ', expected, ' but got, ', actual);
  }
}

assertObjectsEqual(isTeenager(salesTeam), ["Earline Erickson", "Jin Jeffrey", "Magda Mireles", "Tama Tworek"], "Should return a list of all teenagers on the Sales Team")//passed


//PART3
function oldest(salesTeam) {
  const old = {
    name: '',
    age: -Infinity
  };
  // console.log(salesTeam[0]); 
  // console.log(salesTeam[1]); 
  // console.log(salesTeam[2]);
  salesTeam.reduce((total, curr) => {
    if (curr.age > total.age) {
      total.age = curr.age;
      total.name = `${curr.name.first} ${curr.name.last}`;
    }
    // console.log(total)
    return total;
  }, old)
  return `The oldest student is ${old.name}`;
}

oldest(salesTeam)//Output correct

assertObjectsEqual(oldest(salesTeam), 'The oldest student is Alvaro Angelos', 'should output a string listing the full name of the oldest person on the sales team')


//PART 4
function tenThousandClub(salesTeam) {
  const teamTenThousand = salesTeam.filter((ele) => {
    return Number(ele.sales.slice(1)) > 10000;//can also use parseInt
  });
  // console.log(teamTenThousand)
  return teamTenThousand.map(ele => {
    return `${ele.name.first} ${ele.name.last}`
  })
}

tenThousandClub(salesTeam)//Correct output

assertObjectsEqual(tenThousandClub(salesTeam), ['Earline Erickson', 'Hyon Hampshire', 'Jin Jeffrey', 'Joleen Jolin'], 'should return an array of strings of full names of every person that had sales over $10,000')//passed





//PROBLEM 4 - ALT, USING RECOMMENDED helper function "salesToNumber"

//Ex. input: '$2314'
function salesToNumber (string) {
  const digitString = string.slice(1); //'2314'
  const salesAsNumber = parseInt(digitString, 10); 
  //would run with parseInt(digitString) without radix; but MDN says to always specify radix with parseInt (usually 10 - decimal)
  //Number(digitString) would also work ==> //2314
  return salesAsNumber;
}
//can also write this on one line:
function salesToNumber (string) {
  return parseInt(string.slice(1));
}

function tenThousandClub(salesTeam) {
  const teamTenThousand = salesTeam.filter(person => {
    return salesToNumber(person.sales) > 10000;
  });
  // console.log(salesTeamWithDigits)
  return teamTenThousand.map(ele => {
    return `${ele.name.first} ${ele.name.last}`
  })
}
//can also chain this together
function tenThousandClub(salesTeam) {
  return salesTeam.filter(person => {
    return salesToNumber(person.sales) > 10000;
  }).map(ele => {
    return `${ele.name.first} ${ele.name.last}`;
  })
}

tenThousandClub(salesTeam)

assertObjectsEqual(tenThousandClub(salesTeam), ['Earline Erickson', 'Hyon Hampshire', 'Jin Jeffrey', 'Joleen Jolin'], 'should return an array of strings of full names of every person that had sales over $10,000')
