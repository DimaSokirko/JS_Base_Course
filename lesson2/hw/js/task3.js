// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a = +prompt("Введите a");
var b = +prompt("Введите b");
var c = +prompt("Введите 3");
var m;
        
if (a > b) {
     m = a;
} else if (b > c) {
     m = b;
}else {
    m = c;
 }

console.log(m);