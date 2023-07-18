import { isEscape } from './util.js';
import {
  validateHashTags,
  validateHashTagsCount,
  validateHashTagsDuplicates,
} from './form-validators.js';

import { resetZoom } from './zoom.js';
import { resetVisual } from './visual.js';
import './visual.js';

const bodyElelement = document.body;
const modalElement = document.querySelector('.img-upload__overlay');
const formModal = document.querySelector('.img-upload__form');
const closeModalBtn = document.querySelector('.img-upload__cancel');
const selectFileBtn = document.querySelector('.img-upload__input');
const hashtagsElement = document.querySelector('.text__hashtags');
const commentElement = document.querySelector('.text__description');

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

const showModal = () => {
  bodyElelement.classList.add('modal-open');
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', documentKeyDownHandler);
};

const hideModal = () => {
  formModal.reset();
  pristine.reset();
  resetZoom();
  resetVisual();
  bodyElelement.classList.remove('modal-open');
  modalElement.classList.add('hidden');
  selectFileBtn.value = '';
  document.removeEventListener('keydown', documentKeyDownHandler);
};

function documentKeyDownHandler(e) {
  if (isEscape(e)) {
    e.preventDefault();
    hideModal();
  }
}
const pressEscHandler = (e) => {
  if (isEscape(e)) {
    e.stopPropagation();
  }
};

const submitFormHandler = (e) => {
  e.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
};

export const initUploadForm = () => {
  formModal.addEventListener('submit', submitFormHandler);

  selectFileBtn.addEventListener('change', showModal);
  closeModalBtn.addEventListener('click', hideModal);
  hashtagsElement.addEventListener('keydown', pressEscHandler);
  commentElement.addEventListener('keydown', pressEscHandler);
};
