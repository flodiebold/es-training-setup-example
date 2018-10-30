/* @flow */

import ICNDBClient from "../remote/icndbClient";
import type { IJokeRater } from "./jokeRater";
import { ask } from "../util";

export class JokeApp {
    +client: ICNDBClient;

    +rater: IJokeRater;

    constructor(client: ICNDBClient, rater: IJokeRater) {
        this.client = client;
        this.rater = rater;
    }

    async nextJoke(): Promise<void> {
        const { joke } = await this.client.getRandomJoke();

        const response = await ask(`
            What do you think about this joke: 
            ${joke}
        `);
    }
}