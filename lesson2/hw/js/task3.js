// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a = +prompt("Введите a");
var b = +prompt("Введите b");
var c = +prompt("Введите c");
var m;
        
if (a > b && a > c) {
     m = a;
} else if (b > a && b > c) {
     m = b;
} else if (c > a && c > b) {
     m = c;
}

console.log(m);