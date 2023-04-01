const pictureTemp = document.querySelector('#picture');
const pictureElement = document.querySelector('.pictures');


function createPhotoMiniature(description) {

  const pictureListFragment = document.createDocumentFragment();

  for ({url, likes, comments} of description) {
    const picture = pictureTemp.cloneNode(true);
    picture.querySelector('picture_img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;
    pictureListFragment.appendChild(picture);
  }

  pictureListFragment.appendChild(pictureListFragment);
}
