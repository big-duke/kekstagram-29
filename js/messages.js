import { isEscape } from './util.js';
const Message = {
  success: {element:document.querySelector('#success').content.querySelector('.success'), btnClass:'.success__button'},
  error: {element:document.querySelector('#error').content.querySelector('.error'), btnClass:'.error__button'}
};


const showMessage = (message) => {
  message.element
    .querySelector(message.btnClass)
    .addEventListener('click', hideMessage);
  document.body.append(message.element);
  document.body.addEventListener('click', bodyClickHandler);
  document.addEventListener('keydown', documentKeyDownHandler);
};

function bodyClickHandler (e) {
  if (e.target.closest('.success') || e.target.closest('.error')) {
    hideMessage();
  }
}

function documentKeyDownHandler(e) {

  if (isEscape(e)) {
    e.preventDefault();
    hideMessage();
  }
}

function hideMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.body.removeEventListener('click', bodyClickHandler);
  document.removeEventListener('keydown', documentKeyDownHandler);
}



export const showSuccessMessage = () => showMessage(Message.success);
export const showErrorMessage = () => showMessage(Message.error);
