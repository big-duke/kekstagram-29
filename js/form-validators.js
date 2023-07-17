const REGEXP_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

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

export { validateHashTags, validateHashTagsCount, validateHashTagsDuplicates };
