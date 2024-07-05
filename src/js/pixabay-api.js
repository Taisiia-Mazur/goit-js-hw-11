export function fetchParams(item) {
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
