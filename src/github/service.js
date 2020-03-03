import {GitHubRepo} from "./model";

const reposURL = 'https://api.github.com/users/Elldrigar/repos';
const forbiddenRepos = ['Portfolio-project', 'JSVanilla_Infinite-scroll-posts'];
const convert = ({
    name,
    stargazers_count: stars,
    license
}) => new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
});

export default function getRepos() {
    return fetch(reposURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw Error('Response is not 200');
        })
        .then(arr => arr
            .filter(r => !forbiddenRepos.includes(r.name))
            .map(convert))
        .catch(err => console.warn(err))
}
