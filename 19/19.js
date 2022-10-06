// 1. На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

// let obj = {
//     id: 1,
//     age: 21,
//     name: 'Yaroslaw',

// }

// let str = 'name'

// function checkObj(str, obj) {
//     return obj.hasOwnProperty(str)
//     // const arr = Object.keys(obj)
//     // let flag = false
//     // for (const item of arr) {
//     //     flag = item == str ? true : false
//     // }
//     // return flag
// }

// 2. Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

// let btn = document.querySelector('.btn')

// btn.addEventListener("click", () => {
//     let obj = {}
//     let inpt = document.querySelector('.inpt').value
//     for (let i = 0; i < inpt; i++) {
//         obj[i] = Math.floor(Math.random() * 100)
//     }
//     const count = qtyOfPair(obj)
//     console.log(count);
// })

// function qtyOfPair(obj) {
//     let arr = Object.entries(obj)
//     return arr.length
// }

// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

// let obj = {
//     id: 1,
//     age: 21,
//     name: 'Yaroslaw',
// }
// let str = "Yaroslaw"

// function checkObj(obj,str){
//     let arr=Object.values(obj)
//     for (const item of arr) {
//         let flag = false
//     for (const item of arr) {
//         flag = item == str ? true : false
//     }
//     return flag
//     }
// }

// 4. На входе объект. Ключи и значения - автоинкремент (генерируется
//     автоматически от 1 до n). Написать функцию на поиск в объекте только четных
//     ключей

// let obj={}

// let btn=document.querySelector(".btn")

// btn.addEventListener("click",()=>{
//     const inpt=+document.querySelector(".inpt").value
//     for(let i=0;i<inpt;i++){
//         obj[i]=Math.floor(Math.random(1)*100)
//     }
//     let arr=Object.keys(obj).filter(item=> item%2==0)
//     // let arrnew=arr.filter(item=> item%2==0)
//     console.log(arr);
// })

// 5. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте.

// let obj = {}

// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     const inpt = +document.querySelector(".inpt").value
//     for (let i = 0; i < inpt; i++) {
//         obj[i] = Math.floor(Math.random() * 100)
//     }
//     let arrobj=Object.keys(obj)
//     console.log(obj.hasOwnProperty("10"), obj);
//     console.log(!arrobj.filter(el=>el===10).join(``), obj);
//     console.log(Object.keys(obj).some(item => item == 10), obj);
//     let i=0
//     while(arrobj[i]<arrobj.length){
//         if(arrobj[i]==10){
//             console.log(true);
//             break
//         }
//     i++
//     }
// })