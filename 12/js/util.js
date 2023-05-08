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

export {getRandomInt};
