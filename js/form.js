const ALERT_SHOW_TIME=3000;

import {input,hashtagsValid} from './validation-form.js';
import {input, hashtagsValid, inputComments, isEveryHashtagSymbolsValid, isAmountValid, areHashtagsUnique, commentLength} from './validation-form.js';
import {sendData} from './api.js';
import {showAlert, blockSubmitButton, unblockSubmitButton} from './util.js';
import {sliderValue, sliderElement,img} from './photo-filter.js';

const imgOverlay = document.querySelector('.img-upload__overlay');
const start = document.querySelector('.img-upload__start input');

const photoUser = document.querySelector('#upload-file');

const body=document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');
const submitButton = document.querySelector('#upload-submit');
const description = form.querySelector('.text__description');

start.onchange = function () {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.querySelector('.scale__control--value').value = `${100}%`;
};

function closeWindow(){
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  sliderElement.classList.add('hidden');
  sliderValue.value='';
  document.querySelector('.img-upload__preview img').style.filter = '';
  document.getElementById('effect-none').checked = true;
  img.classList='';
  document.querySelector('.img-upload__preview').style.transform='scale(1)';
  document.querySelector('.scale__control--value').value = `${100}%`;
}

const cancel = document.querySelector('.img-upload__cancel');
cancel.addEventListener('click', () => {
  closeWindow();
  photoUser.value ='';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    closeWindow();
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
   clonedErrorModal.style.zIndex = '100';
  setTimeout(() => {
    clonedErrorModal.remove();
  }, ALERT_SHOW_TIME);
};

const pristine = new Pristine(form,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text'
}, true);

pristine.addValidator(document.querySelector('[name="hashtags"]'), hashtagsValid);
//сообщения об ошибках хештегов
const formValidateCheck = () => {
  pristine.addValidator(hashtags, isEveryHashtagSymbolsValid, 'Хэш-тег должен начинается с символа #, должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации, эмодзи и т. д.');
  pristine.addValidator(hashtags, areHashtagsUnique, 'Хэш-теги не должны повторяться');
  pristine.addValidator(hashtags, isAmountValid, 'Хэш-тегов не должно быть больше 5');
};
pristine.addValidator(description, commentLength, 'Длина комментария не может составлять больше 140 символов');
formValidateCheck();

//отправка формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input.value === '' || pristine.validate() ) {
    blockSubmitButton(submitButton);
    sendData(
      () =>{ closeWindow(); showSuccessMessageModal();unblockSubmitButton(submitButton);},
      () => { showAlert('Не удалось отправить форму. Попробуйте ещё раз'); showErrorMessageModal(); unblockSubmitButton(submitButton);},
      new FormData(evt.target),
    );
    photoUser.value = '';
    input.value = '';
    inputComments.value = '';
  }
  else {
    showErrorMessageModal();
    
  }
});
