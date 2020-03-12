import {BlogPost, Header, Navigation, Footer, Body} from "./component";

export default () => {
    customElements.define('blog-header', Header);
    customElements.define('blog-body', Body);
    customElements.define('blog-nav', Navigation);
    customElements.define('blog-footer', Footer);
    customElements.define('blog-post', BlogPost);
};
