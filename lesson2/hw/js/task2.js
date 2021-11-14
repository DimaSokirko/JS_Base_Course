// Построить прямоугольный треугольник состоящий из символа "*".
//     Запросить у пользователя число, к примеру - 4

//     *
//     **
//     ***
//     ****

var i = 0, a = 0;
 
var max = 5;
 
    triangle = "";
    max = +prompt('Введите число', '')
 
while (i < max) {
   
    triangle = "";
    
    for (a = 0; a < i + 1; a++) triangle += "*";
    console.log(triangle);
    i++;
}