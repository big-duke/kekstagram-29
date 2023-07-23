import { renderPreview } from './preview.js';

const RANDOM_PICTURE_LIMIT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

let filter = Filter.DEFAULT;
let pictures = [];

const filtersContainer = document.querySelector('.img-filters');

const getFilterPictures = () => {
  switch (filter) {
    case Filter.RANDOM:
      return [...pictures]
        .sort(() => 0.5 - Math.random())
        .slice(0, RANDOM_PICTURE_LIMIT);
    case Filter.DISCUSSED:
      return [...pictures].sort(
        (a, b) => b.comments.length - a.comments.length
      );
    default:
      return pictures;
  }
};

filtersContainer.addEventListener('click', (e) => {
  if (!e.target.matches('button')) {
    return;
  }

  if (e.target.id === filter) {
    return;
  }

  const activeBtn = e.target;
  filtersContainer
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  activeBtn.classList.add('img-filters__button--active');
  filter = activeBtn.id;
  renderPreview(getFilterPictures());
});

const initFilters = (picturesData) => {
  filtersContainer.classList.remove('img-filters--inactive');
  pictures = [...picturesData];
};

export { initFilters };
