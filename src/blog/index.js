import {BlogPost, Header} from "./component";

export default () => {
    customElements.define('blog-header', Header);
    customElements.define('blog-post', BlogPost);
};
