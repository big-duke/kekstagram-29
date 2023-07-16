const previewTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

const createPreview = ({ id, url, description, comments, likes }) => {
  const preview = previewTemplate.cloneNode(true);

  preview.querySelector('.picture__img').src = url;
  preview.querySelector('.picture__img').alt = description;
  preview.querySelector('.picture__comments').textContent = comments.length;
  preview.querySelector('.picture__likes').textContent = likes;

  preview.dataset.previewId = id;

  return preview;
};

export const renderPreview = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const preview = createPreview(picture);
    fragment.append(preview);
  });
  container.append(fragment);
};
