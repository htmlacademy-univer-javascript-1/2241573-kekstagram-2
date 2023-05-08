import { input,hashtagsValid } from './validation-form.js';

const imgOverlay = document.querySelector('.img-upload__overlay');
const start = document.querySelector('.img-upload__start input');

const photoUser = document.querySelector('#upload-file');

const body=document.querySelector('body');
start.onchange = function () {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

imgOverlay.classList.remove('hidden');
body.classList.add('modal-open');
const cancel = document.querySelector('.img-upload__cancel');
cancel.addEventListener('click', () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  photoUser.value ='';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    photoUser.value = '';
  }
});


const showSuccessMessageModal = () => {
  const successModal = document.querySelector('#success').content.querySelector('.success');
  const clonedSuccessModal = successModal.cloneNode(true);
  const closeSuccessModalButtonElement = clonedSuccessModal.querySelector('.success__button');

  closeSuccessModalButtonElement.addEventListener('click',(evt) =>{
    evt.preventDefault();
    body.removeChild(clonedSuccessModal);

  } );

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      clonedSuccessModal.remove();
    }
  });

  document.addEventListener('click',()  => {
    clonedSuccessModal.remove();
  });
  document.body.append(clonedSuccessModal);
};

const showErrorMessageModal = () =>{
  const errorModal = document.querySelector('#error').content.querySelector('.error');
  const clonedErrorModal = errorModal.cloneNode(true);
  const closeErrorModalButtonElement = clonedErrorModal.querySelector('.error__button');
  closeErrorModalButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.removeChild(clonedErrorModal);
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      clonedErrorModal.remove();
    }
  });
  document.addEventListener('click', () => {
    clonedErrorModal.remove();
  });
  document.body.append(clonedErrorModal);
};

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);
pristine.addValidator(document.querySelector('[name="hashtags"]'), hashtagsValid);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input.value==='') {
    showSuccessMessageModal();
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    photoUser.value = '';
    input.value = '';
    inputComments.value = '';
  }
  else if (pristine.validate()) {
    showSuccessMessageModal();
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    photoUser.value = '';
    input.value = '';
  }
  else {
    showErrorMessageModal();
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    photoUser.value = '';
  }
});
