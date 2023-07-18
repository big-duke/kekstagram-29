const SLIDER_DEFAULT_CONFIG = {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
}

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');


noUiSlider.create(sliderElement, SLIDER_DEFAULT_CONFIG);

export const updateSliderConfig = (visual) => {
  const config = {
    range: {
      min: visual.min,
      max: visual.max,
    },
    start: visual.max,
    step: visual.step,
  };
  sliderElement.noUiSlider.updateOptions(config);
};

export const slider = sliderElement.noUiSlider;
