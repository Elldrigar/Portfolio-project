import { getJoke } from './service';

export default async function () {
    alert(await getJoke())
}