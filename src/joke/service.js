import { Joke } from './model';

const jokeURL = 'https://official-joke-api.appspot.com/random_joke';
const jokeURL2 = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';

export async function getJoke() {
    try {
       const response = await fetch(jokeURL);
       const joke = await response.json();
       if (joke.type === 'programming') {
       return new Joke(joke);
       }
       const { value: { joke: punchline } } = await (await fetch(jokeURL2)).json();
       return new Joke({ punchline });
    } catch (err) {
    console.warn(err);
    return new Joke({
        setup: 'Zapomnialem kawału!',
        punchline: 'Ok! Hahaha, ten też był dobry!'
    });
    }
}