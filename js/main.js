function getRandomInt(from, to) {
  let fromTemp = from;
  let toFrom = to;

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
      fromTemp = to;
      toFrom = from;
    }
    return Math.round(Math.random() * (toFrom - fromTemp) + fromTemp);
  }

}


const isCorrectLength = (str, maxLenght) => {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }
  return str.length <= maxLenght;
};
