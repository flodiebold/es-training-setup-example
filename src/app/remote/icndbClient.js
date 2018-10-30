/* @flow */

import * as fetch from "node-fetch";

export class Joke {
    +id: number;

    +joke: string;

    +categories: string[];

    constructor(id: number, joke: string, categories: string[]) {
        this.id = id;
        this.joke = joke;
        this.categories = categories;
    }
}

export interface IJokeClient {
    getRandomJoke(): Promise<Joke>;
    getJokeById(id: number): Promise<Joke>;
    getJokeByCategory(category: string): Promise<Joke>
}

export default class ICNDBClient implements IJokeClient {
    +baseUrl: string;

    constructor() {
        this.baseUrl = "https://api.icndb.com"
    }


    static async getJson(url: string): Promise<any> {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error when fetching url "${url}": ${await res.text()}`);
        }

        return res.json();
    }

    static parseJoke(response: any): Joke {
        const {id, joke, categories} = response.value;
        return new Joke(id, joke, categories);
    }

    async getRandomJoke(): Promise<Joke> {
        const json = await ICNDBClient.getJson(`${this.baseUrl}/jokes/random`);
        return ICNDBClient.parseJoke(json);
    }

    async getJokeById(id: number): Promise<Joke> {
        const json = await ICNDBClient.getJson(`${this.baseUrl}/jokes/${id}`);
        return ICNDBClient.parseJoke(json);
    }

    async getJokeByCategory(category: string): Promise<Joke> {
        const json = await ICNDBClient.getJson(`${this.baseUrl}/jokes/random?limitTo=[${category}]`);
        return ICNDBClient.parseJoke(json);
    }
}