import { getData } from './api.js';
import { renderPreviewOriginal } from './preview.js';
import { initUploadForm } from './form.js';
import { initFilters } from './filters.js';
import { showAlert } from './util.js';

getData()
  .then((pictures) => {
    initFilters(pictures);
    renderPreviewOriginal(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

initUploadForm();
