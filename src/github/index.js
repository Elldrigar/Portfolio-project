import getRepos from "./service";

export default function () {
    getRepos().then(arr => arr.forEach(r => alert(r)));
}