import { getBlogPost, getBlogPostNames } from "../github/service";
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
;}

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

export class Footer extends HtmlElementWithContent{
    constructor() {
        super('footer', style.footer, '&copy; Wszelkie prawa zastrzeżone gawron.me 2020');
    }
}

export class Body extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async render() {
        const posts = await getBlogPostNames();
        this.shadowRoot.innerHTML = (`
        <section>
        ${this.renderStyles()}
        <div class="${style.container}">
          <main>
             ${posts.reverse().map(postName => `<blog-post post-name="${postName}"></blog-post>`).join('<hr>')}        
          </main>
          <aside>
            <slot name="side-menu"></slot>      
          </aside>
        </div>
        </section>
        `);
    }
    renderStyles() {
        return (`
        <style>
            .${style.container} {
                max-width: 70em;
                margin: 0 auto;
            }
            section {
                overflow: hidden;
                padding: 1em 1.25em;
                background-color: #fff;
            }
            .main, .aside {
                margin-bottom: 1em;
            }
            @media (min-width: 55em) {
            section {
                 padding: 2em 3em;
            }
            
            main {
                 float: left;
                 width: 65%;
                 margin-right: 5%;
                 margin-bottom: 1em;
                 }
            aside {
                 float: left;
                 width: 30%;
                 margin-bottom: 1em;
                 }
             }
        </style>
        `);
    };
}

export class BlogPost extends HTMLElement {
    static get observedAttributes() {
        return ['post-name'];
    }
    constructor() {
        super();
        this.attachShadow( { mode: 'open'});
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    async render() {
        const name = this.getAttribute('post-name');
        const content = (await getBlogPost(`${name}.md`));
        this.shadowRoot.innerHTML = (`
        <article>
            <mark-down>
                ${content}
            </mark-down>
        </article>
        <style>
           
        </style>
        `);
    }
}