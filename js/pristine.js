const REGEXP_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const formModal = document.querySelector('.img-upload__form');
const hashtagsElement = document.querySelector('.text__hashtags');

const getHashtags = (value) =>
  value
    .trim()
    .split(' ')
    .filter((item) => Boolean(item));
const validateHashTags = (value) => {
  const hashtags = getHashtags(value);

  return hashtags.every((item) => REGEXP_HASHTAG.test(item));
};

const validateHashTagsCount = (value) => {
  const hashtags = getHashtags(value);

  return hashtags.length <= 5;
};

const validateHashTagsDuplicates = (value) => {
  const hashtags = getHashtags(value).map((tag) => tag.toLowerCase());

  return new Set(hashtags).size === hashtags.length;
};

const pristine = new Pristine(
  formModal,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper',
  },
  false
);

pristine.addValidator(
  hashtagsElement,
  validateHashTags,
  'Неверно указан хэш-тег',
  1,
  false
);

pristine.addValidator(
  hashtagsElement,
  validateHashTagsCount,
  'Не более 5 хэш-тегов',
  2,
  false
);

pristine.addValidator(
  hashtagsElement,
  validateHashTagsDuplicates,
  'Дублирование хэш-тегов не допускается',
  3,
  false
);

export const validate = pristine.validate;
export const reset = pristine.reset;

