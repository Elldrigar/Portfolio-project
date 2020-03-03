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

export default async function getRepos() {
    try {
    const response = await fetch(reposURL);
            if (response.ok) {
                return (await response.json())
                    .filter(r => !forbiddenRepos.includes(r.name))
                    .map(convert);
            }
            throw Error('Response is not 200');
        } catch(err) {console.warn(err);
        return[]
    }
}
