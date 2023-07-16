const bodyElelement = document.body;
const pictureModal = document.querySelector('.big-picture');
const closeModalBtn = document.querySelector('.big-picture__cancel');
const pictureElement = document.querySelector('.big-picture__img > img');
const descriptionElement = document.querySelector('.social__caption');
const likesCountElement = document.querySelector('.likes-count');

const commentsCountContainerElement = document.querySelector('.social__comment-count');
const commentsLoaderButton = document.querySelector('.social__comments-loader');
const commentsCountElement = document.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social__comment').content;

const createComment = ({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderComments = (comments) => {

  commentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  commentsContainer.append(fragment);

};
export const displayPictureModal = ({ url, description, likes, comments }) => {
  pictureModal.classList.remove('hidden');
  bodyElelement.classList.add('modal-open');
  commentsCountContainerElement.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');

  pictureElement.src = url;
  pictureElement.alt = description;
  likesCountElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  descriptionElement.textContent = description;


  renderComments(comments);

  document.addEventListener('keydown', handleDocumentKeyDown);
};

const hideModal = () => {
  pictureModal.classList.add('hidden');
  bodyElelement.classList.remove('modal-open');
  document.removeEventListener('keydown', handleDocumentKeyDown);
};

function handleDocumentKeyDown(e) {
  if (e.key === 'Escape') {
    e.preventDefault();
    hideModal();
  }
}

closeModalBtn.addEventListener('click', hideModal);
