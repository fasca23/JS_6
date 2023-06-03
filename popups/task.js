

const popups = document.querySelectorAll(`.modal`);
// ищем "сделать хорошо" с кнопкой
const buttonSuccess = document.querySelector(`.show-success`);
// ищем "хорошо сделано" попап
const popupSuccess = document.querySelector(`.btn_success`);

(function() {
    // Выполняем для каждого элемента массива
  popups.forEach(popup => {
    // ищем блок с кнопкой и активируем ее присваивая элементу класс для активации из css
    // ищем наличие `.btn_success` для удобства приведя его к булевому значению
    if (!popup.querySelector(`.btn_success`)) {

      popup.className = `modal modal_active`;
    }
    // при нажатии на крестик запускаем закрытие всплывающего окна
    popup.querySelector(`.modal__close`).onclick = closePopup;
    // при нажатии на кнопку запускаем функцию закрытия и открытия
    popup.querySelector(`.show-success`).onclick = showSuccess;
  })
}());

// закрываем всплывающее окно через близайшего родителя к селектору
function closePopup() {
  this.closest(`.modal`).className = `modal`;
}
// открываем новое всплывающее окно с "хорошо сделано"
function showSuccess() {
    // закрываем "сделать хорошо"
  buttonSuccess.closest(`.modal`).className = `modal`;
    // открываем "хорошо сделано"
  popupSuccess.closest(`.modal`).className = `modal modal_active`;
}