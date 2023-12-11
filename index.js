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
	reindeers.forEach((reno)=>{
		pesoQuePuedeLevantarElReno = reno.length * 2;
		for (let pesoReno = 1; pesoReno <= pesoQuePuedeLevantarElReno; pesoReno ++){
			arrayCantidadPesoReno.push(pesoReno);
		}
	})
	packOfGifts.forEach((regalo)=> {
		let pesoPorRegalo = regalo.length;
		for(let pesoTotal = 1; pesoTotal <= pesoPorRegalo; pesoTotal ++){
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


/*Codeforces Reto Watermelon*/

const watermelonWeight = 90;
function canBeEven() {        
  if(watermelonWeight % 2 !== 0) {
    return "NO";
  } else return "YES";
}
//console.log(canBeEven()); 
//*TODO: Descomenta para ejecutar ⬆️

/*Codeforces Reto Way Too Long Words*/

const word = "internationalization"

function longWord() {
  if(word.length > 10) {
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

/*Codeforces Reto Team*/

function solveContest(n, problems) {
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

console.log(solveContest(n1, problems1)); 

const n2 = 2;
const problems2 = [
  [1, 0, 0],
  [0, 1, 1],
];

//console.log(solveContest(n2, problems2)); 
//*TODO: Descomenta para ejecutar ⬆️