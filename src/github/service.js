const reposURL = 'https://api.github.com/users/Elldrigar/repos';

export default function getRepos() {
    return fetch(reposURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw Error('Response is not 200');
        })
            .catch(err => console.warn(err))
}
