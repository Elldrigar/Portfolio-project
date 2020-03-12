import initMD from 'markdown-element';
import { getBlogPost } from "./github/service";
import gameStart from './game/index';
import main from './github/index';
import jokeStart from './joke/index';

import initInfo from './about-me/index';
import initBlog from './blog/index';

initInfo();
initBlog();

const game = document.querySelector('.game');
const joke = document.querySelector('.joke');

game.addEventListener('click', gameStart);
joke.addEventListener('click', jokeStart);
