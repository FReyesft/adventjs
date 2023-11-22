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
distributeGifts(packOfGifts, reindeers);
