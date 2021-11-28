//  4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//        содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

        var company = [
            p1 = {
                name: a = prompt("Enter first name:"), 
                sName: b = prompt("Enter surname:"),
                age: c = prompt("Enter age:"),
                occupation: d = prompt("Enter occupation:"),
                show: function() {
                    console.log("First name: " + this.name);
                    console.log("Surname: " + this.sName);
                    console.log("Age: " + this.age + " years old");
                    console.log("Occupation: " + this.occupation);
                }
            },
            p2 = {
                name: a = prompt("Enter first name:"), 
                sName: b = prompt("Enter surname:"),
                age: c = prompt("Enter age:"),
                occupation: d = prompt("Enter occupation:"),
                show: function() {
                    console.log("First name: " + this.name);
                    console.log("Surname: " + this.sName);
                    console.log("Age: " + this.age + " years old");
                    console.log("Occupation: " + this.occupation);
                }
            },
            p3 = {
                name: a = prompt("Enter first name:"), 
                sName: b = prompt("Enter surname:"),
                age: c = prompt("Enter age:"),
                occupation: d = prompt("Enter occupation:"),
                show: function() {
                    console.log("First name: " + this.name);
                    console.log("Surname: " + this.sName);
                    console.log("Age: " + this.age + " years old");
                    console.log("Occupation: " + this.occupation);
                }
            }
        ]
        
        for (var i = 0; i < company.length; i++) {
            company[i].show();
        }