import {getRandomInt} from './util.js';

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


function getRandomLikes() {
  const likes = getRandomInt(15, 200);
  return likes;
}

function getRandomElement(arr) {
  const element = arr[getRandomInt(0, arr.length - 1)];
  return element;
}

function getId() {
  let id = 1;
  return () => id++;
}


function getCommentId() {
  const id = getRandomInt (1, 25);
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

function generateDescription() {
  const comments = Array.from({length: getRandomInt(0, 7)}, generateComment);
  const id = getCommentId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomLikes(),
    comments: comments
  };
}

const description = Array.from({length: PHOTOS_COUNT}, generateDescription);

export {description};

