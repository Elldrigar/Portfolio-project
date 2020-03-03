import initMD from 'markdown-element';
import { getBlogPost } from "./github/service";
// import game from './game/index';
// import main from './github/index';
import main from './joke/index';


getBlogPost('0.md').then((blogPost) => {
    const md = document.createElement('mark-down');
    md.textContent = blogPost;
    document.body.appendChild(md);
});
// main();

