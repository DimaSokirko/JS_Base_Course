//   3. Напишите функцию которая бы переворачивала предоставленную строку
//         Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
//         Ваш результат должен быть строкой.
//         "something"

// 		"test" => "tset"

function reverseString(str) {
    //превратить str в мaссив
    //вызвать на полученом мвссиве метод reverse
    //перевернутый массив превратить в строку
    //вернуть перевернутую строку

    var arr = str.split("");
    console.log(arr);
    var reverseArr = arr.reverse();
    console.log(reverseArr);
    var reversString = reverseArr.join("")
    console.log(reversString)
    
    return reversString;
}
reverseString("abcde");