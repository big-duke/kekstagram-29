import {createRandomIdFromRangeGenerator, getRandomArrayElement, getRandomInteger} from './util.js';
const commentsMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentAuthors = ['Юлия', 'Надежда', 'Иван', 'Павел', 'Дмитрий', 'Ольга'];

const generatePictureId = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 10000);

const generateCommentMessages = () => {
  const messagesCount = getRandomInteger(1, 2);
  const generateMessageId = createRandomIdFromRangeGenerator(
    0,
    commentsMessages.length - 1
  );
  const commentMessagesIds = Array.from(
    { length: messagesCount },
    generateMessageId
  );
  return commentMessagesIds.map((index) => commentsMessages[index]).join();
};

const createComment = () => {
  const id = generateCommentId();
  const avatarId = getRandomInteger(1, 6);
  return {
    id,
    avatar: `img/avatar-${avatarId}.svg`,
    message: generateCommentMessages(),
    name: getRandomArrayElement(commentAuthors),
  };
};

const generateComments = () => {
  const commentCounts = getRandomInteger(0, 30);
  return Array.from({ length: commentCounts }, createComment);
};

const createPicture = () => {
  const id = generatePictureId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description:
    'Vestibulum porttitor massa ac nunc consequat condimentum. Interdum et malesuada fames ac ante donec',
    likes: getRandomInteger(15, 200),
    comments: generateComments(),
  };
};

export const generatePictures = () => Array.from({ length: 25 }, createPicture);

