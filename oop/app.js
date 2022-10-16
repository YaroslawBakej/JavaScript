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