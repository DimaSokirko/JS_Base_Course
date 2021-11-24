	// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
	// 		Определите наименьшее и наибольшее число в массиве.
	// 		Массив, минимальное и максимальное число - вывести в консоль.
	function getRandomArbitrary(min, max) {
	return Math.floor (Math.random() * (max - min) + min);
}
	

function getPositivSome() {
	var num = +prompt("Введите количество єлементов в мвссиве")
	var array = [];
	for (var i = 0; i < num; i++) {
		var randomNumber = getRandomArbitrary(-10, 10);
		array.push(randomNumber);
	}
	console.log(array);

	var more = 0;
	for (var i = 0; i < num; i++) {
		if (array[i] > i) {
			more = array[i];
		}
	}
	console.log(more);

	// var lesser = 0;
	// for (var i = 0; i < num; i++) {
	// 	if (array[i] > 0) {
	// 		lesser = array[i-1];
	// 	}
	// }
	// console.log(sum);
}
getPositivSome();