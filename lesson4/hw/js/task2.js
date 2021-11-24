// Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// 		Проверить числа на корректность

var num = +prompt('Введите число? ');
var power = +prompt(' Введите степень ? ');


function pow(num, power) {
  let result = num;

  for (let i = 1; i < power; i++) {
    result *= num;
  }

  return result;
}



if (power < 1) {
  console.log('Степень ' + power + ' не поддерживается, используйте натуральное число');
} else {
  console.log( pow(num, power) );
}