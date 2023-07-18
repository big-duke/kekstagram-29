import { visuals } from './const.js';
import { slider, updateSliderConfig } from './slider.js';


const preview = document.querySelector('.img-upload__preview > img');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderValueElement = document.querySelector('.effect-level__value');
const visualsContainer = document.querySelector('.effects__list');

let currentVisual = visuals.none;

const isNoneVisual = () => currentVisual === visuals.none;

const applyFilter = (value = undefined) => {
  const filter = `${currentVisual.style}(${value ?? currentVisual.max}${currentVisual.unit})`;
  preview.style.filter = isNoneVisual() ? '' : filter;
};

const sliderUpdateHandler = () => {
  const sliderValue = slider.get();
  sliderValueElement.value = sliderValue;
  applyFilter(sliderValue);
};

const selectVisualHandler = (e) => {
  const targetInput = e.target.closest('input[type="radio"]');

  if (!targetInput) {
    return;
  }

  const visualName = targetInput.getAttribute('id').split('-')[1];
  currentVisual = visuals[visualName];
  applyFilter();
  updateSliderConfig(currentVisual);
  sliderContainerElement.style.display = isNoneVisual() ? 'none' : '';
};

slider.on('update', sliderUpdateHandler);
visualsContainer.addEventListener('click', selectVisualHandler);

sliderContainerElement.style.display = 'none';

export const resetVisual = () => {
  preview.style.filter = '';
  sliderContainerElement.style.display = 'none';
};
