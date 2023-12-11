//!Reto 1

const gifts = ['cat', 'game', 'socks'];
function wrapping(gifts) {
  let giftsEnvolved = [];
  gifts.forEach(gift => {
    let quantityOfCharacters = gift.length + 2;
    let quanityOfPaper = []
    for (let i = 0; i < quantityOfCharacters; i++) {
      quanityOfPaper[i] = "*"
    }
    let paper = quanityOfPaper.toString().replaceAll(',', '');
    const giftEnvolved = `${paper}\n*${gift}*\n${paper}`;
    giftsEnvolved.push(giftEnvolved)
  });
  return giftsEnvolved;
}

const wrapped = wrapping(gifts);
//console.log(wrapped);
//*TODO: Descomenta para ejecutar ⬆️

//!Reto 2


function countHours(year, holidays) {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  let extraHours = 0;

  for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}`;
      if (holidays.includes(formattedDate)) {
        extraHours += 2;
      }
    }
  }

  return extraHours;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25', '10/12', '11/10']
//console.log(countHours(year, holidays));
//*TODO: Descomenta para ejecutar ⬆️

//!Reto 3

function distributeGifts(packOfGifts, reindeers) {
  let pesoQuePuedeLevantarElReno;
  let pesoTotalDeLaCajaDeRegalos;
  let cajasQuePuedeLlevarSantaClaus;
  let arrayCantidadPesoRegalos = [];
  let arrayCantidadPesoReno = [];
  reindeers.forEach((reno) => {
    pesoQuePuedeLevantarElReno = reno.length * 2;
    for (let pesoReno = 1; pesoReno <= pesoQuePuedeLevantarElReno; pesoReno++) {
      arrayCantidadPesoReno.push(pesoReno);
    }
  })
  packOfGifts.forEach((regalo) => {
    let pesoPorRegalo = regalo.length;
    for (let pesoTotal = 1; pesoTotal <= pesoPorRegalo; pesoTotal++) {
      arrayCantidadPesoRegalos.push(pesoTotal)
    }
  })
  pesoQuePuedeLevantarElReno = arrayCantidadPesoReno.length;
  pesoTotalDeLaCajaDeRegalos = arrayCantidadPesoRegalos.length;
  cajasQuePuedeLlevarSantaClaus = parseInt(pesoQuePuedeLevantarElReno / pesoTotalDeLaCajaDeRegalos);
  return cajasQuePuedeLlevarSantaClaus;
}
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

//console.log(distributeGifts(packOfGifts, reindeers));
//*TODO: Descomenta para ejecutar ⬆️
//!Reto 4

function fitsInOneBox(boxes) {

  boxes.sort((a, b) => {
    const maxA = Math.max(a.l, a.w, a.h);
    const maxB = Math.max(b.l, b.w, b.h);
    return maxA - maxB;
  });
  for (let i = 0; i < boxes.length - 1; i++) {
    const boxA = boxes[i];
    const boxB = boxes[i + 1];

    if (!(boxA.l < boxB.l && boxA.w < boxB.w && boxA.h < boxB.h)) {
      return false;
    }
  }

  return true;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

//console.log(fitsInOneBox(boxes)); 
//*TODO: Descomenta para ejecutar ⬆️

//!Reto 5

/*function findFirstRepeated(gifts) {
  let firstId = gifts[0]
  for (let index = 0; index < gifts.length; index++) {
    let element = gifts[index]
    if(firstId === element) {
      return firstId
    } else return -1
  } 
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)*/


/*Codeforces Reto Watermelon 01*/

const watermelonWeight = 90;
function canBeEven() {
  if (watermelonWeight % 2 !== 0) {
    return "NO";
  } else return "YES";
}
//console.log(canBeEven()); 
//*TODO: Descomenta para ejecutar ⬆️

/*Codeforces Reto Way Too Long Words 02*/

const word = "internationalization"

function longWord() {
  if (word.length > 10) {
    let wordArr = word.split('');
    let firstLetter = wordArr[0]
    let lastPosition = wordArr.length - 1
    let lastLetter = wordArr[lastPosition]
    let splicedWord = wordArr.slice(1, lastPosition).length
    let wordMinified = `${firstLetter}${splicedWord}${lastLetter}`
    return wordMinified
  } else {
    return word
  }
}

//console.log(longWord())
//*TODO: Descomenta para ejecutar ⬆️

/*Codeforces Reto Team 03*/

function areSureOfProblem(n, problems) {
  let output = 0;

  for (let i = 0; i < n; i++) {
    const sureCount = problems[i].reduce((acumulator, valor) => acumulator + valor, 0);
    if (sureCount >= 2) {
      output++;
    }
  }

  return output;
}
const n1 = 3;
const problems1 = [
  [1, 1, 0],
  [1, 1, 1],
  [1, 0, 0],
];

//console.log(areSureOfProblem(n1, problems1)); 
//*TODO: Descomenta para ejecutar ⬆️

const n2 = 2;
const problems2 = [
  [1, 0, 0],
  [0, 1, 1],
];

//console.log(areSureOfProblem(n2, problems2)); 
//*TODO: Descomenta para ejecutar ⬆️

/*Codeforces Reto Next Round 04*/


function nextRound(players, minPoints) {
  let arrOfPlayer = []
  minPoints = minPoints + 1;
  let count = 0;
  for (let i = 1; i < players + 1; i++) {
    let pointsOfPlayer = Math.floor(Math.random() * 10)
    arrOfPlayer.push(pointsOfPlayer)
  }
  console.log(arrOfPlayer)
  arrOfPlayer.forEach((player) => {
    if (player >= minPoints) {
      count++
    }
  })
  console.log(count)
}

//nextRound(8, 5)
//*TODO: Descomenta para ejecutar ⬆️


/*Codeforces Reto Bit++ 05*/


function solveOperation(number, typeOperation) {
  if (typeOperation === '--') {
    number -= 1;
    return number;
  } else if (typeOperation === '++') {
    number += 1;
    return number
  }
}

/*
let inputNumber = parseInt(prompt("Escriba el número"));
let typeOperation = prompt("escriba el tipo de operación el número es: " + inputNumber);
console.log(solveOperation(inputNumber, typeOperation))
*/
//*TODO: Descomenta para ejecutar ⬆️


/*Codeforces Reto Dominio piling 06*/


function fitsIn(side1, side2) {
  const sizeDomino = 2;
  const sizeTable = side1 * side2;
  let countOfDominos = Math.floor(sizeTable / sizeDomino);
  return countOfDominos;
}

//console.log(fitsIn(3, 2));
//*TODO: Descomenta para ejecutar ⬆️


/*Codeforces Reto a beautifull matrix 07*/

const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

let rowIndex = matrix.findIndex(row => row.includes(1));
let columnIndex = matrix[rowIndex].findIndex(element => element === 1);
let centerRowIndex = Math.floor(matrix.length / 2);
let centerColumnIndex = Math.floor(matrix[0].length / 2);
let count = 0;

function beautifullMatrix() {
  while (rowIndex !== centerRowIndex || columnIndex !== centerColumnIndex) {
    if (rowIndex < centerRowIndex) {
      rowIndex++;
      count++;
    } else if (rowIndex > centerRowIndex) {
      rowIndex--;
      count++;
    }

    if (columnIndex < centerColumnIndex) {
      columnIndex++;
      count++;
    } else if (columnIndex > centerColumnIndex) {
      columnIndex--;
      count++;
    }
  }
  return count
}

//console.log(beautifullMatrix());
//*TODO: Descomenta para ejecutar ⬆️


/*Codeforces Reto Petya and Strings 08*/


function compareString(str1, str2) {
  let str1LowerCase = str1.toLowerCase();
  let str2LowerCase = str2.toLowerCase();
  if (str1LowerCase === str2LowerCase) {
    return 0;
  } else if (str1LowerCase < str2LowerCase) { //?No sabía que se podian comparar string de esta manera :O
    return -1
  } else if (str1LowerCase > str2LowerCase) { //?No sabía que se podian comparar string de esta manera :O
    return 1
  }
}


const string1 = "aaaa";
const string2 = "aaaA";

//console.log(compareString(string1, string2))
//*TODO: Descomenta para ejecutar ⬆️


/*Codeforces Reto Helpful Maths 09*/

function orderSum(string) {
  let arrString = string.split('+');
  let arrSorted = arrString.sort();
  let arrWithoutSimbol = []
  let lastIndex = arrSorted.length
  for (let i = 0; i < arrSorted.length; i++) {
    if(lastIndex != arrSorted[i]) {
      arrWithoutSimbol.push(arrSorted[i] + '+')
    }
  }
  arrWithoutSimbol = arrWithoutSimbol.join('').slice(0, -1);
  let finalArr = arrWithoutSimbol.replace(',', '');
  return finalArr;
}

let string = "1+1+1+3+3";
console.log(orderSum(string));

//*TODO: Descomenta para ejecutar ⬆️
