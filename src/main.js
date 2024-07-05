import {
  inputPictures,
  errorParams,
  showLoading,
  hideLoading,
} from './js/render-functions';
import { fetchParams } from './js/pixabay-api';

const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-container');
const loading = document.querySelector('.loading');

formSearch.addEventListener('submit', getPictureByValue);

function getPictureByValue(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;

  const inputValue = form.elements.insert.value.toLowerCase().trim();

  if (inputValue === '') {
    hideLoading();
    return errorParams();
  }

  showLoading();
  gallery.innerHTML = '';

  fetchParams(inputValue)
    .then(inputPictures)
    .catch(errorParams)
    .finally(() => form.reset());
}
