import './data.js';
import './photo-miniature.js';
import './big-photo.js';
import './form.js';
import './photo-filter.js';
import './size.js';
import {getData} from './api.js';
import { createMiniatures } from './photo-miniature.js';

getData((photos) => { createMiniatures(photos);});




