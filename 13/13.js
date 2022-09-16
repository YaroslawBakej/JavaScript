// 1. На входе число n. Напишите функцию, которая переворачивает число.
// let n=6
// function swap(x){
//     return 
// }
// console.log(swap(n));
// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

// let n = 6
// function checkLength(x) {
//     let res = ``
//     if (checkArr(x)) {
//         x.forEach(element => {
//             if (element.length > res.length) {
//                 res = element
//             }
//         });
//     } else {
//         res = `введите только строки`
//     }
//     return res
// }

// function checkArr(x){
//     return x.every(a => isNaN(a) ? true : false)
// }
// function pushArray(x) {
//     let arr = []
//     for (let i = 0; i < x; i++) {
//         arr.push(prompt(`enter yout text`))
//     }
//     return arr
// }
// console.log(checkLength(pushArray(n)))

// function checkstr(x) {
//     return x.some(a => typeof a !== `string`)
// }
// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

// const email = `jarobak1995@gmail.com`

// function checkEmail(n) {
//     const obj={email:n}
//    return n.includes(`@` || `com` || `ru`) ? {...obj, active:true} : {...obj, active:false}

// }
// console.log(checkEmail(email));
// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если
// значения массива не соответствуют условию задания, вывести сообщение об
// ошибке.

// let n = [1, 2, 3, 4, 5, 6]

// function maxAndMinValues(arr) {
//     arr.sort()
//     return `${arr[0]} максимальное, ${arr[arr.length - 1]} минимальное`
// }
// console.log(maxAndMinValues(n));

// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

// let password=`qwerty`.split(``)

// function checkPassword(n){
//    if(n.some(elem=> elem===elem.toUpperCase)&&n.length>8, n.some(elem=> elem !==`string`)){
//     return true
//    }
// }

// console.log(checkPassword(password));
// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

// function qty(){
// let count=0
//      return function(){
//         count++
//         return count
//      }
// }

// const qtyOfCall=qty()

// console.log(qtyOfCall());
// console.log(qtyOfCall());
// console.log(qtyOfCall());
// console.log(qtyOfCall());
// console.log(qtyOfCall());
// 1. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции
// function concatOfString() {
//     let resultStr = ``
//     return function () {
//         let str = prompt(`enter your text`)
//         return resultStr += str
//     }
// }

// const concatResult = concatOfString()
// console.log(concatResult());
// console.log(concatResult());
// console.log(concatResult());
// console.log(concatResult());
// 2. Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

// function uniqueElem(str) {
//     let arr = []
//     str.split(``).forEach(element => {
//         !arr.includes(element) ? arr.push(element) : false
//     });
//     return arr.join(``)
// }

// console.log(uniqueElem(`Позволяеткопироватьтекстиз`));

// 3. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

// let n = +prompt(`enter qty of elements`)
// let b = +prompt(`enter letter for find`)
// function findBiggestValue(x, b) {
//     let new_arr = x.filter(elem => {
//         return elem > b 
//     })
//     return new_arr
// }
// function createArr(n){
//     let arr=[]
//     for(let i=0; i<n; i++){
//      arr.push(+prompt(`enter letter of elem`))
//     }
//     return arr
// }

// console.log(findBiggestValue(createArr(n), b));

// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

// let a = prompt(`enter your letter`)
// let b = prompt(`enter your string`)

// function qtyOfLetter(letter, string) {
//     let count = 0
//     string.split(``).forEach(element => {
//         element == letter ? count+=1 : false
//     });
//     return count
// }
// console.log(qtyOfLetter(a, b));

// 4. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

// let obj={"key1":"1","key2":"2","key3":"3","key4":"4","key5":"5"}

// function returnValuesOfKey(x){
//     array.forEach(element => {

//     });
// }

// 5. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.
// function randomNumber() {
//     const arr = Array.from({ length: 100 }, (_, index) => index + 1)
//     return function () {
//         let x = Math.floor(Math.random() * arr.length)
//         arr.splice(x)
//         return arr[x]
//     }
// }
// const x = randomNumber()
// console.log(x());
// 6. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / знаечение. IIFE

// let obj = { "key1": "1", "key2": "2", "key3": "3", "key4": "4", "key5": "5" }

// function qtyPairOfElem(obj) {
//     count = 0
//     for (const key in obj) {
//         key != undefined
//         count++
//     }
//     return count
// }
// console.log(qtyPairOfElem(obj));
// 7. Напишите функцию, генерирующую надежный пароль. (Math.random)


// 1. *Напишите функцию, рассчитывающую ряд Фибоначчи используя рекурсию.
// Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из
// которых является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// 2. *Вычислите сумму массива целых чисел статичного массива используя рекурсию