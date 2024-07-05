import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function inputPictures({ hits }) {
  const gallery = document.querySelector('.gallery-container');
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
    hideLoading();
    return errorParams();
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  }).refresh();
  hideLoading();
}

export function showLoading() {
  const loading = document.querySelector('.loading');
  loading.style.display = 'flex';
}

export function hideLoading() {
  const loading = document.querySelector('.loading');
  loading.style.display = 'none';
}

export function errorParams() {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    title: '',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
