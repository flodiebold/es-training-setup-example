/* eslint-disable no-await-in-loop */
/* @flow */
import "@babel/polyfill";

import { JokeRater } from "./business/jokeRater";
import ICNDBClient from "./remote/icndbClient";
import type { IJokeClient } from "./remote/icndbClient";
import { JokeApp } from "./business/jokeApp";

const client: IJokeClient = new ICNDBClient();
const rater: IJokeRater = new JokeRater();
const app = new JokeApp(client, rater);

(async function main() {
    while (true) {
        await app.nextJoke();
    }
})();
