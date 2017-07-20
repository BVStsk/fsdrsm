import './index.scss';

import createMenu from './menu';
var menu = createMenu(['glavnaya','obo mne','portfolio'], 'menu');
document.body.appendChild(menu);