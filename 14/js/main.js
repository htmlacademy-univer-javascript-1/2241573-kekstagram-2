import {createMiniatures} from './photo-miniature.js';
import './big-photo.js';
import './form.js';
import './photo-filter.js';
import {getData} from './api.js';
import './size.js';
import {sort} from './img-filters.js';
import './avatar.js';

getData((photos) => { createMiniatures(photos);
  sort(photos);
});

