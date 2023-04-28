const bigPicture = document.querySelector('.big-picture');
document.addEventListener('keydown', (KeyboardEvent) => escapePressed(ev));
bigPicture.querySelector('#picture-cancel').addEventListener('click', closeBigPicture);

const escapePressed = (ev) => ev.key === 'Escape' && closeBigPicture();

const AVATAR_IMAGE_SIZE = 35;
const FIVE_COMMENTS = 5;

const bigPhotoCansel = document.querySelector('#picture-cancel');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsCount = document.querySelector('.comments-count');

function createBigPhoto({url, likes, description, comments}) {
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments;

  const commentsListFragment = document.createDocumentFragment();

  for (const comment of comments) {
    commentsListFragment.appendChild(createComment(comment));
  }

  bigPicture.querySelector('.social__comments').replaceChildren(commentsListFragment);
  bigPicture.querySelector('.social__caption').textContent = description;

}

if (commentsCount.textContent <= FIVE_COMMENTS) {
  socialCommentsCount.firstChild.textContent = ` ${commentsCount.textContent} из  `;

  loaderButton.classList.add('hidden'); }
if (commentsCount.textContent > FIVE_COMMENTS) {
  socialCommentsCount.firstChild.textContent = ` ${FIVE_COMMENTS} из  `;
  loaderButton.addEventListener('click', () => {
    comments.slice(5).forEach((comment) => {
      const newComment = createComment(comment);
      commentsList.appendChild(newComment);
    });
    socialCommentsCount.firstChild.textContent = ` ${commentsCount.textContent} из  `;
    loaderButton.classList.add('hidden');
  }, { once: true });

  openBigPicture();
  bigPhotoCansel.addEventListener('click',close);
};

//Список комментариев под фотографией
function createComment({avatar, name, message}) {
  const listElement = document.createElement('li');
  listElement.classList.add('social__comments');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('social__picture');
  avatarImg.src = avatar;
  avatarImg.alt = name;
  avatarImg.width = AVATAR_IMAGE_SIZE;
  avatarImg.height = AVATAR_IMAGE_SIZE;

  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  textComment.textContent = message;

  listElement.appendChild(avatarImg);
  listElement.appendChild(textComment);

  return listElement;
}


function showBigPhoto(picture) {
  if(document.body.classList.conteins('modal-open')) {
    return;
  }

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const loaderButton = document.querySelector('.comments-loader');
function close(){
  activeImg.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  commentsList.innerHTML = '';
  bigPhotoCansel.removeEventListener('click', close);
}
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    activeImg.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsLoader.classList.remove('hidden');
    commentsList.innerHTML = '';
  }
});

export {createBigPhoto, showBigPhoto, createComment};
