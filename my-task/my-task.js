// let n = 28
// let arr = []
// for (let i = 0; i < n; i++) {
//     if (n % i === 0) {
//         arr.push(i)
//     }
// }

// let summArr = arr.reduce(function (sum, current) {
//     return sum + current;
// }, 0);

// console.log(summArr);

// if (summArr === n && n === ((summArr + n) / 2)) {
//     console.log(`true`);
// } else {
//     console.log(`false`);
// }

// Вычислить значение Bn, где n - показатель степени, а b - основание 

// let n = 8
// let b = 4

// function exp(b, n) {
// b = +b
// n = +n
//     let a
//     a = b ** n
//     return a;
// }

// console.log(exp(b, n));

// Найти элементы массива, которые больше указанного числа

// let a = 13

// let arr = [1, 24, 2321, 42, 6, 3, 9, 23, 11, 9]

// function IfBigElem(a) {
//     let biggestelem = []
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = +arr[i]
//         if (arr[i] > a) {
//             biggestelem.push(arr[i])
//         }
//     }
//     return biggestelem
// }

// console.log(IfBigElem(a).sort());

// Переверните число задом наперед

// function reverse_a(n) {
//     n = n.toString()
//     return n.split(``).reverse().join(``);
// }

// let a = prompt(`enter your value`)

// console.log(reverse_a(a));

// Проверьте является ли переданная строка палиндромом

// function check(ystring) {
//     n = ystring.toString().split(``).reverse().join();
//     if(n===ystring){
//         `true`
//     }
//     return 
// }

// let a = `anna`
// console.log(check(a));

// const arr = [
//     { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ];

// // 1. Read
// console.log(arr);
// 2. Create.  Запушить в БД объект только в том случае, если нет совпадений по
// label (добавить ключ id со значением label в toLowerCase). Если совпадение есть – ошибка
// const obj = { "label": "Test", "category": "test", "priority": 1 }
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].label !== obj.label) {
//         count++
//     }
// }

// let a = obj.label.toLowerCase()
// const newObj = { id: a, ...obj }

// if (count === arr.length) {
//     arr.push(newObj)
//     console.log(arr);
// } else {
//     console.log("error");
// }
// 3. Update
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести обновление значений для соответствующих
// ключей.
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не включая id клиента. В результативный массив 
// запушить клиентский, тем самым обновить объект БД
// Если совпадения по id нет – ошибка 

//??????????????
// const obj1 = { "id": "test", "label": "Test", "category": "test", "priority": 2 };
// const res = arr.reduce((nObj, elem) => { 
//     if (nObj[id] === obj1[id]) {
//         delete nObj 
//         arr.push(obj1)
//     } else {
//         console.log("error");
//     }
// })
// console.log(res);






























// const arr = [`test`, `test1`, `test2`, `test`, `test2`, `test3`, `test4`].sort()

// console.log(arr);

// const arrResult = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
//         arrResult.push(arr[i]);
//     }
// }

// console.log(arrResult);


// let obj = { 1: 2, 2: 3, 3: 4, 4: 5 }

// function qtyOfPair(obj) {
//     const arr = Object.entries(obj)
//     return arr.length
// }
// console.log(qtyOfPair(obj));

// function pow(x, n) {
//     if (n === 1) {
//         return x
//     } else {
//         return pow(x, n - 1)
//     }
// }

// console.log(pow(3,7));

// function rec() {
//     let count = 0
//     return function countsum() {
//         return count += 1
//     }
// }

// let myFunc = rec()
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())

// \< !--[a - zA - Z0 - 9] + --\>

// function deleteComments(html) {
//     return html.replaceAll(/\<!--[a-zA-Z0-9 ]+--\>/g, ``)
// }
// const html = `<div>
// <!--dqdaafas-->
// <input>
// </div>`
// console.log(deleteComments(html));

// function abc(a, b, c) {
//     return function (d) {
//         return function (e) {
//             return [a, b, c, d, e]
//         }
//     }
// }

// console.log(abc(1, 2, 3)(4)(5));


// class A{
//     getSum(){
//         console.log('+');
//     }
// }


// class B extends A{
//     getSum(){
//         super.getSum()
//         console.log('-');
//     }
// }
// const a=new A()



// class Client {
//     constructor() {
//         this.doRegistration()
//     }

//     isEmpty(mail, password) {
//         if (!mail) throw new Error('error mail')
//         if (!password) throw new Error('error mail')
//     }
//     doRegistration() {
//         const btn = document.querySelector('.btn')

//         btn.addEventListener('click', () => {
//             try {
//                 const mail = document.querySelector('.mail').value
//                 const password = document.querySelector('.password').value
//                 this.isEmpty(mail, password)
//                 console.log(mail, password);
//                 const server = new Server()

//                 const dataFromServer=server.controller({ mail: mail, password: password })

//                 alert(dataFromServer)
//             } catch (error) {
//                 alert(error.message)
//             }
//         })
//     }
// }

// const client = new Client()
// class Server {
//     middleware() { }
//     controller(obj) {
//         try {
//             const bool = this.service(obj)
//             return bool
//         } catch (error) {
//             console.log(error.message)
//             throw new Error(error.message)
//         }
//     }
//     service(obj) {
//         const bool = this.repository(obj)
//         if(!bool) throw new Error('такой пользователь есть')
//         return bool
//     }
//     repository(obj) {
//         const DB = [
//             { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" }, { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
//             { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" }, { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
//             { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
//         ]
//         const res = DB.filter(el => el.email == obj.mail ? el : null)
//         if (res.length == 0) {
//             DB.push(obj)
//             return true
//         }
//         return false
//     }
// }

// middleware -> controller -> service -> repository








// class Dom {
//     constructor() {
//         this.fillArray()
//     }

//     fillArray() {
//         let newArr = []
//         const btn = document.querySelector('.btn')
//         btn.addEventListener('click', () => {
//             const one = document.querySelector('.one').value
//             if (!isNaN(one)) {
//                 newArr.push(one)
//             }
//             let uniqArr = []
//             document.querySelector('h1').innerHTML = newArr
//             newArr = newArr.sort()
//             for (let i = 0; i < newArr.length; i++) {
//                 if (newArr[i] != newArr[i - 1] && newArr[i] != newArr[i + 1]) {
//                     uniqArr.push(newArr[i])
//                 }
//             }
//             document.querySelector('h2').innerHTML = uniqArr
//         })

//     }

//     checkArray() {

//     }




// }

// const dom = new Dom()









