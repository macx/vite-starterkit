import './css/main.scss';
import starterkitLogo from './assets/images/vite-starterkit.svg';
import { version } from '../package.json';

/* prettier-ignore */
console.log('%c┌─────────────────────────────────────────┐\n  VITE STARTERKIT                          \n  https://github.com/macx/vite-starterkit  \n└─────────────────────────────────────────┘', 'background: black; color: limegreen');

document.querySelector<HTMLDivElement>('.logo')!.innerHTML = `<img src="${starterkitLogo}">`;
document.querySelector<HTMLDivElement>('.version')!.innerHTML = `v ${version}`;
