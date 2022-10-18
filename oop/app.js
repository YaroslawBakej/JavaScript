// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getАutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.
// class Singer {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getAutograph() {
//         return `${this.name} ${this.surname}, с наилучшими пожеланиями`
//     }
// }
// const singer = new Singer("Yaroslaw", "Bakej")
// console.log(singer.getAutograph());
// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

// class Calculator {
//     // constructor(value1, value2) {
//     //     this.value1 = value1
//     //     this.value2 = value2
//     // }
//     getSum(value1, value2) {
//         return value1 + value2
//     }
//     getDiff(value1, value2) {
//         return value1 - value2
//     }
//     getUmn(value1, value2) {
//         return value1 * value2
//     }
//     getDel(value1, value2) {
//         return value1 / value2
//     }

// }

// const calculator = new Calculator()
// console.log(calculator.getSum(2, 3));
// console.log(calculator.getDiff(2, 3));
// console.log(calculator.getUmn(2, 3));
// console.log(calculator.getDel(2, 3));

// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной
// первую букву каждого слова этой строки.
// class WordString{
//     constructor(str){
//         this.str=str
//     }
//     reverseString(){
//        return this.str.split(``).reverse().join(``)
//     }
//     upperFirst(){
//         return this.str[0].toUpperCase()+this.str.slice(1).toLowerCase()
//     }
//     upperEvery(){
//         const arr=this.str.split(` `)
//         let result=arr.reduce((num,elem)=>num + (elem[0].toUpperCase() + elem.slice(1).toLowerCase()), )
//         return result
//     }
// }

// const wordStrind=new WordString(`kjeggrujka top`)
// console.log(wordStrind.reverseString())
// console.log(wordStrind.upperFirst())
// console.log(wordStrind.upperEvery())    
// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

// class MathСalculation{
//     constructor(n){
//         this.n=n
//     }
//     newArr(){
//         let arr=[]
//         for(let i=0; i<this.n; i++){
//             arr.push( Math.floor(Math.random() * 100))
//         }
//         return arr
//     }
//     qtyOfEvenNumber(){
//         const result=this.newArr().filter(el=>el%2==0)
//         return result
//     }
// }

// const mathСalculation= new MathСalculation(10)
// console.log(mathСalculation.newArr());
// console.log(mathСalculation.qtyOfEvenNumber());
// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
// замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
// если слова являются анаграммами. Добавить проверки на ввод
// class Anagram{
//     constructor(str){
//         this.str=str;
//     }
//     checkStr(){
//         try {
//             // if(!this==this.split(``).reverse().join(``))throw new Error('Не анаграма')
//             const reverseStr=str.split(``).reverse().join(``)
//             if(!str==reverseStr)throw new Error('Не анаграма')
//             return true 
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const anagram=new Anagram('anna')
// console.log(anagram.checkStr());

// 6. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

// class ServerGetAll {
//     controller() {
//         try {
//             return this.service()
//         } catch (error) {
//             return error.message
//         }
//     }

//     service() {
//         try {
//             const db=this.repository()
//             if (!db) throw new Error("ПУСТО")
//             return db

//         } catch (error) {
//             return error.message
//         }

//     }

//     repository() {
//         const arr = `[{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//          { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//          { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//          { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//          { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]`
//         return JSON.parse(arr)
//     }

// }

// const serverGetAll = new ServerGetAll()
// console.log(serverGetAll.controller());

// 7. Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки

// class ServerById {

//     middleware(parsedData) {
//         if (typeof parsedData.id !== 'string') throw new Error("Не строка");
//     }

//     controller(obj) {
//         try {
//             const parsedData = JSON.parse(obj)
//             this.middleware(parsedData)
//             const gotData = this.service(parsedData)
//             return gotData
//         } catch (error) {
//             return error.message
//         }
//     }

//     service(parsedData) {
//         const gotData = this.repository(parsedData)
//         if (!gotData.length) throw new Error('Пусто')
//         return gotData
//     }

//     repository(parsedData) {
//         const arr = `[{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]`
//         const parsedDB = JSON.parse(arr)
//         const found = parsedDB.filter(el => el.id === parsedData.id)
//         return found
//     }
// }
// const serverById = new ServerById()
// console.log(serverById.controller(`{ "id": "javascript"}`));

// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.
// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.
// 11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

// class Validator {

//     isMail(mail) {
//         try {
//             if (!/^[\w\d]+@[\w]+\.[\w]{1,4}$/g.test(mail)) throw new Error("wrong mail")
//             return mail
//         } catch (error) {
//             return error.message
//         }
//     }
//     isURL(url) {
//         try {
//             if (!/^[https]+\:+\/\/+[\w\d]+.[a-z]+\/$/g.test(url)) throw new Error("wrong URL")
//             return url
//         } catch (error) {
//             return error.message
//         }
//     }
//     isDate(date) {
//         try {
//             if (!/^\d{2}.\d{2}.\d{4}$/g.test(date)) throw new Error(`неверный формат даты`)
//             return date
//         } catch (error) {
//             return error.message
//         }
//     }
//     isPhone(phone){
//         try {
//             if(!/^\+[\d]{3}\([\d]{2}\)[\d]{3}-[\d]{2}-[\d]{2}$/g.test(phone)) throw new Error (`Неверный номер телефона`)
//             return phone
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator()
// console.log(validator.isMail(`jarobak1995@gmail.com`));
// console.log(validator.isURL(`https://regex101.com/`));
// console.log(validator.isDate(`16.10.2022`));
// console.log(validator.isPhone(`+375(29)637-42-43`));

// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

// class Hashtag {
//     constructor(n) {
//         this.n = n
//     }
//     newArr() {
//         let arr = []
//         for (let i = 0; i < this.n; i++) {
//             let str = prompt(`введите строку`)
//             arr.push(str)
//         }
//         return arr
//     }
//     doHashtag() {
//         return this.newArr().map(x => '#' + x)
//     }
// }

// const hashtag = new Hashtag(10)
// console.log(hashtag.doHashtag());

// // 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// // кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide
// class DomHtml {
//     constructor() {
//         this.main()
//     }
//     main() {
//         btn.addEventListener("click", () => {
//             let value1 = document.querySelector(".one").value
//             let value2 = document.querySelector(".two").value
//             this.doPlus(value1, value2)
//             this.doMinus(value1, value2)
//             this.doMultiply(value1, value2)
//             this.doDivide(value1, value2)
//         })


//     }
//     doPlus() {
//         return document.querySelector(".DoPlus").innerHTML = value1 + value2
//     }
//     doMinus() {
//         return document.querySelector(".DoMinus").innerHTML = value1 - value2
//     }
//     doMultiply() {
//         return document.querySelector(".DoMultiply").innerHTML = value1 * value2
//     }
//     doDivide() {
//         return document.querySelector(".DoDivide").innerHTML = value1 + value2
//     }
// }

// const domHtml = new DomHtml()
// 2. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна
// !/^[\w\d]+@[\w]+\.[\w]{1,4}$/g.test(mail)

// class DomHtml {
//     constructor() {
//         this.main()
//     }
//     main() {
//         let btn = document.querySelector(".btn")
//         btn.addEventListener("click", () => {
//             let mail = document.querySelector(".one").value
//             this.middleware(mail)
//         })
//     }
//     middleware(mail) {
//         try {
//             if (!/^[\w\d]+@[\w]+\.[\w]{1,4}$/g.test(mail)) throw new Error(`ашипка`)
//             alert(`Успешная валидация`)
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const domHtml = new DomHtml()

// 3. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

// class ServerGetAll {
//     constructor() {
//         this.controller()
//     }
//     controller() {
//         try {
//             let serv = this.service()
//             document.querySelector(".doPlus").innerHTML = JSON.stringify(serv)
//         } catch (error) {
//             alert(error.message)
//         }

//     }
//     service() {
//         const check = this.repository()
//         if (!check) throw new Error(`ашипка`)
//         return check
//     }
//     repository() {
//         let arr = `[
//             {"id": 1, "name": "Yesenia", "age": 22},
//             { "id": 2, "name": "Hanna", "age": 22},
//             { "id": 3, "name": "Stanislau", "age": 25 },
//             { "id": 4, "name": "German", "age": 18 },
//             { "id": 5, "name": "Maria", "age": 27 }
//         ]`
//         return JSON.parse(arr)
//     }
// }

// const serverGetAll = new ServerGetAll()

// class DomHtml {
//     constructor() {
//         this.click()
//     }

//     count = 0

//     click() {
//         const btn = document.querySelector(".btn")
//         btn.addEventListener("click", () => {
//             this.count++
//             console.log(this.count);
//         })
//     }
// }
// const domHtml = new DomHtml()


// 2. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd

// 3. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении

// class Client {
//     constructor() {
//         this.sendRequest()
//     }

//     sendRequest() {
//         const btn = document.querySelector(".btn")
//         btn.addEventListener("click", () => {
//             try {
//                 let mail = document.querySelector(".one").value
//                 let pwd = document.querySelector(".two").value
//                 if (this.checkValue(mail, pwd)) document.querySelector(".doPlus").innerHTML = JSON.stringify({ email: mail, pwd: pwd })
//                 const clientData = JSON.stringify({
//                     email: mail,
//                     pwd: pwd
//                 })
//                 const server = new Server(clientData)
//                 server.controller()
//             } catch (error) {
//                 alert(error.message)
//             }

//         })
//     }
//     checkValue(mail, pwd) {
//         if (mail.length == 0) throw new Error(`wrong mail`)
//         if (pwd.length == 0) throw new Error(`wrong pasword`)
//         return true
//     }
// }



// class Server {
//     middlewar() {

//     }
//     controller(clientDate) {
//         const parsedClientDate = JSON.parse(clientDate)
//         this.service(parsedClientDate)
//     }
//     service() {
//         this.repository(parsedClientDate)
//     }
//     repository(parsedClientDate) {
//         const arrData = `[{
//     { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
//     { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
//     { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
//     { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
//     { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
//     }]`
//         const parsedDB = JSON.parse(arrData)
//         const filtered = parsedDB.filter(el => el.mail === parsedClientDate.mail)
//         filtered.push(parsedClientDate)
//     }


// }

// const client = new Client()
// const server = new Server()

// 4. Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// палиндромом -> true, в противном случае false

// 5. Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false


class Word {
    constructor() {
        // this.isPalindrome()
        this.isAnagramm()
    }
    // isPalindrome() {
    //     let btn = document.querySelector(".btn")
    //     btn.addEventListener("click", () => {
    //         let firstStr = document.querySelector(".one").value
    //         let secondStr = document.querySelector(".two").value.split(``).reverse(``).join(``)
    //         try {
    //             if (!firstStr === secondStr) throw new Error('строки не являются палиндромом')
    //             alert(`слово ${firstStr} является палиндромом слова ${secondStr}`)
    //         } catch (error) {
    //             alert(error.message)
    //         }
    //     })
    // }
    isAnagramm() {
        let btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            let firstStr = document.querySelector(".one").value.split(``).sort().join(``)
            let secondStr = document.querySelector(".two").value.split(``).sort().join(``)
            try {
                if (!firstStr == secondStr) throw new Error("строки не являются палиндромом")
                console.log(firstStr);
                console.log(secondStr);
                console.log(firstStr === secondStr);
            } catch (error) {
                alert(error.message)
            }
        })
    }

}

const word = new Word()


