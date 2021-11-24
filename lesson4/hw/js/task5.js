//  5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
// 		let comp = getComputerChoice();
// 		let user = getUserChoice();
// 		function game(comp, user) {
			
// 		}

//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново

    var getUserChoice = prompt("Выберите Камень, Ножницы, Бумага?");
    var getComputerChoice = Math.random();

    if (getComputerChoice < 0.34) {
      getComputerChoice= "Камень";

    } else if(getComputerChoice <= 0.67) {
      getComputerChoice = "Бумага";

    } else {

        getComputerChoice = "Ножницы";
        
    } alert("Computer " + getComputerChoice);
    
    var comp = getComputerChoice;
    var user = getUserChoice;

 

    let game = function (comp, user) {
        if (comp === user) {
            return "Ничья!";

        }else if(comp === "Камень") {
            if(user === "Ножницы") {
                return "Камень выиграл";
            }
            else {
                return "Бумага выиграл";
            }
        }

        else if(comp === "Бумага") {
            if(user === "Камень") {
                return "Бумага выиграл";
            }
            else {
                return "Ножницы выиграл";
            }
        }

        else if(comp === "Ножницы") {
            if(user === "Бумага") {
                return "Ножницы выиграл";
            }
            else {
                return "Камень выиграл";

            }

        }

    }

  alert(game(comp, user));

        