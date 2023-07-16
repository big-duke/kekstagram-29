import { generatePictures } from './data.js';
import { renderPreview } from './preview.js';

const pictures = generatePictures();
renderPreview(pictures);
