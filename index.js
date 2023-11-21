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

const wrapped = wrapping(gifts);
console.log(wrapped);
