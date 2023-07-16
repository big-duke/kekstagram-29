import {displayPictureModal} from './modal.js'
const container = document.querySelector('.pictures');

export const renderGallery = (pictures) => {
  container.addEventListener('click', (e) => {
    const preview = e.target.closest('[data-preview-id]');
    const previewId = Number(preview.dataset.previewId);
    if (Number.isNaN(previewId)) {
      return;
    }

    e.preventDefault();
    const picture = pictures.find((item) => item.id === previewId);
    displayPictureModal(picture);
  });
};
