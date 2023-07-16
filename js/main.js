import { generatePictures } from './data.js';
import { renderPreview } from './preview.js';
import { renderGallery } from './gallery.js';

const pictures = generatePictures();
renderPreview(pictures);
renderGallery(pictures);
