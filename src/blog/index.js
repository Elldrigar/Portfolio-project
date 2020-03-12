import {BlogPost, Header, Navigation} from "./component";

export default () => {
    customElements.define('blog-header', Header);
    customElements.define('blog-post', BlogPost);
    customElements.define('blog-nav', Navigation);
};
