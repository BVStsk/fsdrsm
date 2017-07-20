import './ul/ul.scss';

import createMenu from './ul/ul';

var menu = createMenu(['glavnaya','obo mne','portfolio'], 'menu');
document.body.appendChild(menu);