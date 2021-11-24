//   4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
//         Ваш ответ должен быть числом.
//         "The quick brown fox jumped over the lazy dog" => 6

function getLongestWord(srt) {
    // Розбить строку по пробелу
    //пробежаться по полученому массиву и вывести длинну каждого элемнта
    //обьявить переменную max = 0 
    //внутри цыкла делать проверку max с элементом
    // вернуть в консоль max

    var arr = srt.split(" ");
    console.log(arr);
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i].length);

        if (arr[i].length > max) {
            max = arr[i].length;
            
        }
    }
    return max;
}
getLongestWord("The quick brown fox jumped over the lazy dog");
var result = getLongestWord("The quick brown fox jumped over the lazy dog");
