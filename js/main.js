import { getData } from './api.js';
import { renderPreview } from './preview.js';
import { initUploadForm } from './form.js';
import { showAlert } from './util.js';

getData()
  .then((pictures) => {
    renderPreview(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

initUploadForm();
