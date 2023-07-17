let zoom = 1;

const zoomValueElement = document.querySelector('.scale__control--value');
const zoomIncrementBtn = document.querySelector('.scale__control--bigger');
const zoomDecrementBtn = document.querySelector('.scale__control--smaller');

const preview = document.querySelector('.img-upload__preview');

const ZOOM_MIN = 0.25;
const ZOOM_MAX = 1;
const ZOOM_STEP = 0.25;

const handleZoomChange = (step) => {
  if (step < 0 && zoom > ZOOM_MIN) {
    zoom -= ZOOM_STEP;
  }

  if (step > 0 && zoom < ZOOM_MAX) {
    zoom += step;
  }
  zoomValueElement.value = zoom.toLocaleString(undefined, { style: 'percent' });
  preview.style.transform = `scale(${zoom})`;
};

const zoomIncrementBtnHandler = () => handleZoomChange(ZOOM_STEP);
const zoomDecrementBtnHandler = () => handleZoomChange(-ZOOM_STEP);

zoomIncrementBtn.addEventListener('click', zoomIncrementBtnHandler);
zoomDecrementBtn.addEventListener('click', zoomDecrementBtnHandler);

export const resetZoom = () => {
  preview.style.transform = '';
  return false;
};
