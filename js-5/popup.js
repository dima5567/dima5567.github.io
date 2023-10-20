let window1 = document.querySelector('.more-juke');
let btn1  = document.querySelector('.btn-more-juke');
let  btn2 = document.querySelector('.btn-more-passat');
let window2 = document.querySelector('.more-Passat');

btn1.onclick = function (){

    window1.classList.add('show-window');

}

window1.onclick = function () {
  window1.classList.remove('show-window');

}

btn2.onclick = function (){

    window2.classList.add('show-window');

}

window2.onclick = function () {
    window2.classList.remove('show-window');
  
  }


