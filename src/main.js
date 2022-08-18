import './css/main.scss';
import starterkitLogo from './images/vite-starterkit.svg';
import packageJson from '../package.json';

/* prettier-ignore */
console.log('%c┌─────────────────────────────────────────┐\n  VITE STARTERKIT                          \n  https://github.com/macx/vite-starterkit  \n└─────────────────────────────────────────┘', 'background: black; color: limegreen');

document.querySelector('.logo').innerHTML = `<img src="${starterkitLogo}">`;
document.querySelector('.version').innerHTML = packageJson.version;
