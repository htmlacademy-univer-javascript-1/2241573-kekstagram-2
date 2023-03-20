const PHOTOS_COUNT = 25;
const NAMES = ['Феликс', 'Алек', 'Виктор', 'Лука', 'Винченцо'];
const DESCRIPTIONS = ['Кекс', 'Всё для Кекстаграма', 'Блеск'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо, но не все.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const getRandomLikes = () => getRandomInt(15, 200);

const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];


function getRandomInt(from, to)
/**
 * Генерация случайного положительного числа
 * @param {int} from - минимальное число из диапазона
 * @param {int} to - максимальное число из диапазона
 * @returns {int} - случаное число
 */
{
  const fromTemp = from;
  const toFrom = to;

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
    return Math.round(Math.random() * (toFrom - fromTemp) + fromTemp);
  }

}


const isCorrectLength = (str, maxLenght) => str.length <= maxLenght;
/**
 * Проверка максимальной длины строки
 * @param {str} str - длина строки
 * @param {str} maxLenght - максимальная длина строки
 * @returns {str} - строка
 */

const getId = (() => {
  let id = 1;
  return () => id++;
})();


function getCommentId() {
  let id = getRandomInt (1, 25);
  return id;
}


function generateComment() {
  const messageText = [];
  for (let i = 0; i < getRandomInt(1, 2); i++) {
    messageText.push(getRandomElement(MESSAGES));
  }

  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: messageText.join(''),
    name: getRandomElement(NAMES)
  };
}

function generationDescription() {
  return {
    id: getId(),
    url: 'photos/${i}.jpg',
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomLikes(),
    comments: getRandomElement(MESSAGES)
  };
}

const description = getRandomElement(DESCRIPTIONS);


console.log(generationDescription());

