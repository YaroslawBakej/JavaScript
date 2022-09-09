// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

// const namen = prompt(`enter your name`)
// const surname=prompt(`enter your surname`)

// function fullname(a,b){
//     console.log(`Привет`+a +b)
// }
// let x=(a,b)

// 2. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company
// let str = prompt(`enter your string`).split(` `)

// function toUpperCaseStr(a) {
//     let new_arr = a.map(elem => {
//         return elem[0].toUpperCase() + elem.slice(1).toLowerCase()
//     })
//     return new_arr.join(` `)
// }
// console.log(toUpperCaseStr(str));


// 3. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

// const arr = [`by`, `belarus`, `de`, `ru`, `germany`]

// function sortDomen(domen) {
//     let new_arr = domen.filter(elem => {
//         return elem.length < 3
//     })
//     return new_arr
// }

// console.log(sortDomen(arr));
// 4. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function ifNum(n) {
//     new_arr = n.filter(elem => {
//         return !isNaN(elem)
//     })
//     if (new_arr.lenght == n.lenght) {
//         return true
//     }

// }

// console.log(ifNum(arr));
// 5. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// массива. Вторая для нахождения количества элементов массива

// let n = 6

// function qtyElem(qty) {
//     return qty.length
// }
// function pushElem(qty) {
//     let arr = []
//     for (let i = 0; i < qty; i++) {
//         let x = +prompt(`enter yout values`)
//         arr.push(x)
//     }
//     return arr
// }

// console.log(qtyElem(pushElem(n)));

// console.log(qtyElem(x));
// 6. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function sumArr(x) {
//     return x.reduce((sum, elem) => { return sum + elem }, 0)
// }
// function checkArr(x) {
//     let new_arr = x.map(elem => {
//         return !isNaN(elem)
//     })
//     return new_arr.length === x.length ? sumArr(x) : false
// }
// console.log(checkArr(arr));

// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

// let arr = [1, 2, 3, 4, `qwe`, 6]

// function newValueFromArr(x) {
//     return checkArr(x) ? x.map(elem => { return elem * 2 }) : console.log(`error`);
// }

// function checkArr(x) {
//     return x.filter(elem => { return !isNaN(elem) }).length == x.length ? true : false;
// }

// console.log(newValueFromArr(arr));

// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

// let arr = [1, 2, 3, 4, 5, 6, 7]

// function checkForEvenNumbers(x) {
//     return checkForNum(x) ? x.filter(elem => { return elem % 2 == 0 }) : false
// }

// function checkForNum(x) {
//     return x.filter(elem => { return !isNaN(elem) }).length == x.length ? true : false
// }
// console.log(checkForEvenNumbers(arr));

// 10. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

// let n = +prompt(`enter your value`)

// function returnFactorial(x) {
//     let arr = Array.apply(null, { length: x+1}).map(Number.call, Number).slice(1)
//     return arr.reduce((sum, elem) => { return sum * elem }, 1)
// }
// console.log(returnFactorial(n));

// 11. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

// let str = prompt(`enter your value`)

// function ifPalindrom(x) {
//     return x.split(``).reverse().join(``) === x ? true : false
// }

// console.log(ifPalindrom(str));

// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

// 13. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

// const arr = [1, 2, 3, 48, `qwe`, 6, 7, 8]

// function findMaxValue(x) {
//     let res = 0
//     x.forEach(element => {
//         element > res
//         res = element
//     });
//     return checkValues(x) ? res : false
// }
// function checkValues(x) {
//     // return x.filter(elem => { return !isNaN(elem) }).length == x.length ? true : false
//     return !arr.some(a => typeof a !== 'number');
// }

// console.log(findMaxValue(arr))
// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива
const x = 6
function pushValues(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(prompt(`enter your values`))
    }
    return arr
}

function checkValues(arr) {
    // return x.filter(elem => { return !isNaN(elem) }).length == x.length ? true : false
    return !arr.some(a => typeof a !== 'number');
}


function values2(arr){
    return arr.reduce((sum, elem) => { return sum * elem }, 1)
}
console.log(values2(pushValues(x)));
// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для
// формирования массива из всех четных чисел, возведенных в квадрат. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат

