import {GitHubRepo} from "./model";

export default ({
                    name,
                    stargazers_count: stars,
                    license
                }) => new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
});

