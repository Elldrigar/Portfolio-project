import { getAboutMe } from "../github/service";

export class AboutMe extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow( { mode: 'open'});
        this.render();
    }

    async render() {
        this.clean();
        const md = document.createElement('mark-down');
        md.textContent = await getAboutMe();
        this.shadow.appendChild(md);
    }
    clean() {
        this.shadow.childNodes.forEach(child => child.remove());
    }
}