const ALERT_SHOW_TIME = 5000;

function getRandomInt(from, to)
/**
 * Генерация случайного положительного числа
 * @param {int} from - минимальное число из диапазона
 * @param {int} to - максимальное число из диапазона
 * @returns {int} - случаное число
 */
{

  if (from < 0 || to < 0) {
    throw new RangeError('Числа в диапазоне должны быть положительными');
  }

  if (typeof from === 'string' || typeof to === 'string') {
    throw new RangeError('Значения должны быть числами, а не строкой');
  }

  if (typeof from === 'number' || typeof to === 'string') {
    if (from === to) {
      return from;
    }
    if (from > to) {
      [from, to] = [to, from];
    }
    return Math.round(Math.random() * (to - from) + from);
  }

}


const isCorrectLength = (str, maxLenght) => str.length <= maxLenght;
/**
 * Проверка максимальной длины строки
 * @param {str} str - длина строки
 * @param {str} maxLenght - максимальная длина строки
 * @returns {int} - true либо false
 */

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
// функция блока кнопки отправки данных
const blockSubmitButton = (submitButton) => {
  submitButton.disabled = true;
  submitButton.textContent = 'Подождите';
};

const unblockSubmitButton = (submitButton) => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

export {getRandomInt, showAlert, blockSubmitButton, unblockSubmitButton};
