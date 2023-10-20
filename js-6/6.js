let btn1 = document.querySelector('.btn-1')
let inp1 = document.querySelector('.inp-1')
let btn4 = document.querySelector('.btn-4')
let inp4 = document.querySelector('.inp-4')

btn1.onclick = function () {

    let password = 'qq';
    let userWrite = inp1.value;


    if (userWrite == password) {
        div1.innerHTML = 'Вірно'

    }
    else {
        div1.innerHTML = 'Не Вірно'
    }




}
let div3 = document.querySelector('.div-3')
let inp31 = document.querySelector('.inp-31')
let inp32 = document.querySelector('.inp-32')
let btn3 = document.querySelector('.btn-3')

btn3.onclick = function () {
    let num1 = inp31.value
    let num2 = inp32.value

    if (num1 > num2) {
        div3.innerHTML = 'перше число більше' + num1;
    }
    else if (num1 < num2) {
        div3.innerHTML = ' друге число більше' + num2;
    }

    else {
        div3.innerHTML = 'вони рівні'
    }

   
}