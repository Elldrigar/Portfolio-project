import { GitHubRepo } from "./model";

const reposURL = 'https://api.github.com/users/Elldrigar/repos';
const forbiddenRepos = ['Portfolio-project', 'JSVanilla_Infinite-scroll-posts'];
const rawURL = 'https://raw.githubusercontent.com/Elldrigar/Elldrigar.github.io/master/';
const blogFiles ='https://api.github.com/repos/Elldrigar/Elldrigar.github.io/contents/blog';
const postsURL = 'blog/';
const aboutMe = 'blog/about-me.md';
const postName = /(\d+)\.md/;

const convert = ({
    name,
    stargazers_count: stars,
    license
}) => new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
});

async function getRawFileContent(pathToFile) {
    try {
        const response = await fetch(`${rawURL}${pathToFile}`);
        if (response.ok) {
            return (await response.text());
        }
        throw Error('Response is not 200');
    } catch(err) {console.warn(err);
        return''
    }
}

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

export async function getBlogPost(name = '0.md') {
    return getRawFileContent(`${postsURL}${name}`)
}

export async function getAboutMe() {
    return getRawFileContent(aboutMe);
}

export async function getBlogPostNames() {
    try {
        const response = await fetch(blogFiles);
        if (response.ok) {
            return (await response.json())
                .filter(file => postName.test(file.name))
                .map(({ name }) => name.split('.')[0]);
        }
        throw Error('Response is not 200');
    } catch(err) {console.warn(err);
        return[]
    }

}
