const reposURL = 'https://api.github.com/users/Elldrigar/repos';
const forbiddenRepos = ['Portfolio-project','JSVanilla_Infinite-scroll-posts'];

export default function getRepos() {
    return fetch(reposURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw Error('Response is not 200');
        })
            .catch(err => console.warn(err))
        .then(arr => arr.filter(r => !forbiddenRepos.includes(r.name)));
}
