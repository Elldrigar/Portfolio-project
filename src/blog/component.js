import { getBlogPost } from "../github/service";

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