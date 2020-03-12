import { getBlogPost } from "../github/service";
import style from './style.css';

class HtmlElementWithContent extends HTMLElement {
    constructor(tag, tagStyle, content) {
        super();
        const element = document.createElement(tag);
        element.className = tagStyle;
        element.innerHTML = `
        <div class="${style.container}">
            ${content}
        </div>    
        `;
        this.appendChild(element);
    }
}

export class Header extends HtmlElementWithContent {
    constructor() {
        super('header', style.header, `
            <h1 class="${style['header-heading']}">Blog gawron Me</h1>
        `);
    }
}
export class Navigation extends HtmlElementWithContent {
    constructor() {
        super('nav', style['nav-bar'], `
        <ul class="${style.nav}">
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
        </ul>
        `);
    }
}

export class BlogPost extends HTMLElement {
    static get observedAttributes() {
        return ['post-name'];
    }
    constructor() {
        super();
        this.shadow = this.attachShadow( { mode: 'open'});
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    async render() {
        this.clean();
        const name = this.getAttribute('post-name');
        const md = document.createElement('mark-down');
        md.textContent = await getBlogPost(`${name}.md`);
        this.shadow.appendChild(md);
    }
    clean() {
        this.shadow.childNodes.forEach(child => child.remove());
    }
}