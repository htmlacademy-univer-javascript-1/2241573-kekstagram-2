import {createMiniatures} './photo-miniature.js';
import './big-photo.js';
import './form.js';
import './photo-filter.js';
import {getData} './api.js';
import './size.js';
import {sort} './img-filters.js';
import './avatar.js';

getData((photos) => { createMiniatures(photos);
  sort(photos);
});

