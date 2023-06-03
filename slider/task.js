// вытаскиваем сразу из NodeList items для удобства...
let slider = [...document.querySelectorAll('.slider__item')];
// console.log(slider)
// Определяем индекс активного
let index = slider.indexOf(document.querySelector(".slider__item_active"));
// console.log(index)
// Загоняем стрелки в переменные
let nextArrow = document.querySelector(".slider__arrow_next");
// console.log(nextArrow)
let prevArrow = document.querySelector(".slider__arrow_prev");
// кружки тоже в список
let sliderDots = [...document.querySelectorAll('.slider__dot')];

function imgInstall (){
    // ищем и удаляем активные по стрелкам и по кружкам
    slider.forEach(e => e.classList.remove("slider__item_active"));
    sliderDots.forEach(e => e.classList.remove("slider__dot_active"));
    // по индексу добавляем активности - двигаем картинку и кружок
    slider[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

nextArrow.onclick = () => {
    
    index++;
//   проверяем не крайний ли это индекс
    if (index === slider.length) {
    // если крайний то возвращаем в начало
    index = 0;
    }
    // запускаем индекс в работу
    imgInstall();
};

prevArrow.onclick = () => {

    index--;
//   проверяем не крайний ли это индекс
    if (index === -1) {
    // если крайний то возвращаем конец, учитывая разницу между длиной и номером
    index = slider.length-1;
    }
    // запускаем индекс в работу
    imgInstall();
};

// определяемся с индексом при нажатии на кружок
document.addEventListener('click', e => {
    // таргетом находим елемент дотса который нажали
    if(e.target.closest(".slider__dots")){
        // присваиваем индекс индексу таргета в слайдер доте
        console.log(e.target)
        index = sliderDots.indexOf(e.target);

        imgInstall();
    }
});

