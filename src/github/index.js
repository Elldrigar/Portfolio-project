import getRepos from "./service";

export default function () {
    getRepos().then(arr => alert(arr.length));
}