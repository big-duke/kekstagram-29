import { displayPictureModal } from './modal.js';
import { debounce } from './util.js';
const previewTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

const createPreview = ({ url, description, comments, likes }) => {
  const preview = previewTemplate.cloneNode(true);

  preview.querySelector('.picture__img').src = url;
  preview.querySelector('.picture__img').alt = description;
  preview.querySelector('.picture__comments').textContent = comments.length;
  preview.querySelector('.picture__likes').textContent = likes;

  return preview;
};


export const renderPreviewOriginal = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const preview = createPreview(picture);
    preview.addEventListener('click', (e) => {
      e.preventDefault();
      displayPictureModal(picture);
    });
    fragment.append(preview);
  });
  container.querySelectorAll('.picture').forEach((elem) => elem.remove());
  container.append(fragment);
};

export const renderPreview = debounce(renderPreviewOriginal,500);
