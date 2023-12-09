//!Reto 1

/*Este año los elfos han comprado una 
máquina que envuelve regalos. Pero… ¡no 
viene programada! Necesitamos crear un 
algoritmo que le ayude en la tarea.
A la máquina se le pasa un array con los 
regalos. Cada regalo es un string. Necesitamos 
que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.
El papel de regalo es el símbolo * y 
para envolver un regalo se coloca el símbolo 
* de forma que rodee totalmente al string por 
todos los lados. Por ejemplo:*/


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

const wrapped = wrapping(gifts);  //<--DESCOMENTA PARA EJECUTAR
//console.log(wrapped);

//!Reto 2

/*Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.
Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.
Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.
Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD
// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
countHours(year, holidays) // 2 días -> 4 horas extra en el año
Cosas a tener en cuenta y consejos:
El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.*/

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
//console.log(countHours(year, holidays));   //<--DESCOMENTA PARA EJECUTAR

//!Reto 3

/*Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. 
Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.
Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo 
que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.
Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y 
devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
Cosas a tener en cuenta:

Las cajas de regalos no se pueden dividir.
Los nombres de los regalos y los renos siempre serán mayores que 0.*/


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

//console.log(distributeGifts(packOfGifts, reindeers)); // <-- DESCOMENTA PARA EJECUTAR

//!Reto 4

/*Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. 
Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.
Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas 
en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).
Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud 
de 2, una anchura de 3 y una altura de 2.
Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que 
las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en 
una sola. Ahora veamos un caso que no:
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]
fitsInOneBox(boxes) // false
En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. 
Por lo tanto, no es posible empaquetar todas las cajas en una sola.
Ten en cuenta que las cajas pueden no venir en orden:
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]
fitsInOneBox(boxes) // true
En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar 
todas las cajas en una sola.
Cosas a tener en cuenta:
Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
Las cajas pueden venir desordenadas de tamaño.
Las cajas no son siempre cuadradas, pueden ser rectangulares.*/

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

//console.log(fitsInOneBox(boxes)); //<-- DESCOMENTA PARA EJECUTAR


//!Reto 5

/*En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la 
lista. Si no hay números repetidos, devuelve -1.
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.*/

function findFirstRepeated(gifts) {
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
console.log(firstRepeatedId)