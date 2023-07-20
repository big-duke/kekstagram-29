export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export const createIdGenerator = () => {
  let last = 0;
  return () => {
    last += 1;
    return last;
  };
};

export const isEscape = (evt) => evt.key === 'Escape';

export const showAlert = (message) => {
  const alertElement = document.querySelector('.alert__inner');
  alertElement.classList.remove('visually-hidden');

  alertElement.textContent = message;

  setTimeout(() => {
    alertElement.classList.add('visually-hidden');
  }, 5000);
};



