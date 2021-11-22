//  3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.
// Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]

let num = +prompt('Введите размер массива?')
let newArray = new Array(num);

for (var i = 0; i < newArray.length; i++) {
    if (i % 2 != 0) {

        newArray[i] = ['odd', 'odd', 'odd'];
        
    
        // console.log(newArray);
    
    } else if (i % 2 == 0) {
        newArray[i] = ['even', 'even', 'even'];
        
        // console.log(newArray);
        
    } else {
        break
        }
} 
console.log(newArray);











