/* @flow */
import { Joke } from "../remote/icndbClient";

export interface IJokeRater {
    rate(joke: Joke, rating: number): void;
    getBestCategory(): ?string;
}

export class JokeRater implements IJokeRater {
    rate(joke: Joke, rating: number): void {

    }

    getBestCategory(): ?string {
        // TODO: Try to use built-in array functions
        return "none";
    }
}