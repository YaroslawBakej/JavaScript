// 1. Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

// function pushArr(n) {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(+prompt(`enter your value`))
//     }
//     return arr
// }

// function checkArr(arr) {
//     try {
//         if (arr.some(el => isNaN(el))) throw new Error(`введите только числа`)
//         return arr
//     } catch (error) {
//         return error.message
//     }
// }
// function summArr(arr) {
//     return arr.reduce(sum, el => {
//         if (el > 0) {
//             return sum + el
//         } else {
//             return sum + 0
//         }
//     }, 0)

// }
// console.log(summArr(pushArr(8)));

// 2. Реализайте функцию, которая принимает статичный массив и возвращает новый
// массив с отфильтрованными значениями. Массив считается отфильтрованным,
// если в нем присутствуют только числа
// [ 1, 2, “a”, ”b” ] –> [ 1, 2 ]
// [ 1, 2, “aasf”, “1”, “123”, 123 ] –> [ 1, 2, 123 ]

// let arr = [1, `2`, 3, `s`, 4]

// function checkArr(arr) {
//     return arr.filter(el => typeof el == `number`)
// }

// console.log(checkArr(arr));

// 3.Реализуйте функцию, которая принимает число и возвращает объект, где ключи –
// каждый единичный символ числа, значение – четность / нечетность. Добавить
// проверки
// 542613 –> { 5: “неч”, 4: “чет”, 2: “чет”, 6: “чет”, 1: “неч”, 3: “неч” }

// let n = `542613`.split(``)

// function checkArr(arr) {
//     return arr.every(el => !isNaN(el))
// }
// function numToObj(arr) {
//     try {
//         if (checkArr(arr)) {
//             let obj = {}
//             n.forEach(el => { el % 2 == 0 ? obj[el] = `четное` : obj[el] = `нечетное` })
//             return obj
//         } throw new Error(`в массиве есть строчные элементы`)

//     } catch (error) {
//         return error.message
//     }
// }
// console.log(numToObj(n))
// console.log(checkArr(n));

// 4. Реализайте функцию, которая принимает строку и определяет является ли слово
// изограммой. Изограмма – это слово, в котором нет повторяющихся букв,
// последовательных или непоследовательных
// Dermatoglyphics –> true
// aba –> false
// moOse –> false

// let str = `Dermatoglyphics`.split(``).sort()
// function checkstr(str) {
//     return str.some(el => !isNaN(el))
// }
// function checkIsogramm(str) {
//     try {
//         let count = 0
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] == str[i + 1]) {
//                 count++
//                 break
//             }
//             if (!count) throw new Error(`неверно`)
//             return true
//         }
//     } catch (error) {
//         return error.message
//     }

// }

// console.log(checkIsogramm(str));

// 5. Реализуйте функцию, демонстрирующую работу бинарного поиска

// Middleware – cвязующее программное обеспечение.
// Прежде чем запрос попадет на сервер, запрос поступает в middleware, где находятся функции валидаторы.
//  Необходимо реализовать функцию валидатор, которая обрабатывает 2 поля: почту, имя пользователя.
//   Для проверки полей воспользуйтесь регулярными выражениями.
// Middleware-функция возвращает true, если оба условия отработали успешно и false в противном случае

// const mail = `jarobak1995@gmail.com`
// const name = `yaroslaw`

// function checkNameAndMail(x, y) {
//     try {
//         if (!/^[a-z0-9_-]{3,16}$/g.test(x)) throw new Error(`неверный логин`)
//         if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(y)) throw new Error(`неверный адрес эл почты`)
//         return true
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkNameAndMail(name, mail));

// 6.Реализуйте функцию, которая принимает любое неотрицательное целое число и
// возвращает его числа в порядке убывания.По сути, переставьте цифры, чтобы
// получить максимально возможное число.Добавить проверки
// 42145 –> 54421
// 145263 –> 654321
// 123456789 –> 987654321

// let num=`413452`.split(``)

// function sortNum(num){
//       return num.sort().reverse().join(``)
// }

// console.log(sortNum(num));

// 7. Реализуйте функцию, принимающую строку. Ваша задача – вернуть средний
// символ слова. Если длина слова нечетная, вернуть средний символ. Если длина
// слова четная, верните средние 2 символа. Добавить проверки
// test –> es
// testing –> t

// let str = `testingn`

// function returnElem(el) {
//     if (el.length % 2 != 0) {
//         return el[el.length % 2 + 2]
//     } else {
//         return `${el[el.length % 2 + 2]}${el[el.length % 2 + 3]}`
//     }
// }

// console.log(returnElem(str));
// console.log(str.length);

// 8. Реализуйте функцию, принимающую число. Ваша задача – выяснить является ли
// число идеальным квадратом. В математике квадратное число или идеальный
// квадрат – это целое число, являющееся квадратом целого числа; другими
// словами, это произведение некоторого целого числа на самого себя. Если
// является, вывести true, в противном случае false. Добавить проверки
// 3 –> false
// 25 –> true
// 49 –> true

// let num = +prompt(`enter your value`)

// function checkSqrt(num) {
//     let numsqrt = Math.sqrt(num)
//     if (Number.isInteger(numsqrt)) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkSqrt(num));

// 10. Реализуйте функцию, которая принимает строку из 2 повторяющихся символов.
// Необходимо проверить, содержит ли строка одинаковое количество символов.
// Функция возвращает true, если строка содержит одинаковое количество
// символов и false в противном случае. Добавить проверки
// ooxx –> true
// xooxx –> false
// ooxXm –> ИСКЛЮЧЕНИЕ (3 символа)

