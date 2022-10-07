// 1. Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением

// const btn = document.querySelector('.btn');


// console.log(`sada`);
// 2. Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут с
// плейсхолдером по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»

// const btn = document.querySelector(".btn")
// btn.addEventListener('click', () => {
//    document.querySelector('.inpt').value = '+375(20)-111-11-11'
// })

// 3. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn=document.querySelector('.btn')
btn.addEventListener('click', ()=>{
   alert(document.querySelector(`.inpt`).value)
}
)

