import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-container');
const loading = document.querySelector('.loading');

formSearch.addEventListener('submit', getPictureByValue);

function getPictureByValue(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;

  const inputValue = form.elements.insert.value.toLowerCase().trim();

  if (inputValue === '') {
    return errorParams();
  }
  loading.style.display = 'flex';
  gallery.innerHTML = '';

  fetchParams(inputValue)
    .then(inputPictures)
    .catch(errorParams)
    .finally(() => form.reset());
}

function fetchParams(item) {
  const API_KEY = '44767976-5c84653ee99974363117d019c';

  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function inputPictures({ hits }) {
  const hitsList = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${largeImageURL}"> 
   <img src="${webformatURL}" alt="${tags}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${likes}</li>
  <li class="discrabe-item"><b>Views</b> ${views}</li>
  <li class="discrabe-item"><b>Comments</b> ${comments}</li>
  <li class="discrabe-item"><b>Downloads</b> ${downloads}</li>
  </ul>
</div>
</li>
    </ul>`
    )
    .join('');

  gallery.innerHTML = hitsList;

  if (hits.length === 0) {
    return errorParams();
  }
  lightbox.refresh();
  loading.style.display = 'none';
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});

function errorParams() {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    title: '',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
