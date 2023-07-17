import { generatePictures } from './data.js';
import { renderPreview } from './preview.js';
import { initUploadForm } from './form.js';

const pictures = generatePictures();
renderPreview(pictures);
initUploadForm();
