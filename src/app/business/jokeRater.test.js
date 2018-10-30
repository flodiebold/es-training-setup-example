import { JokeRater } from "./jokeRater";
import { Joke } from "../remote/icndbClient";

let currentId = 0;
function jokeWithCategory(category: string): Joke {
    currentId += 1;
    return new Joke(currentId, "Haha!", [category]);
}

describe("JokeRater", () => {
    let rater;
    beforeEach(() => {
        rater = new JokeRater();
    });

    it("does not have any best category initially", () => {
        expect(rater.getBestCategory()).toBe(null);
    });

    it("keeps track of the best category", () => {
        rater.rate(jokeWithCategory("nerdy"), 5);
        rater.rate(jokeWithCategory("boring"), 1);

        expect(rater.getBestCategory()).toBe("nerdy");
    });

    it("has no best category when there is a tie", () => {
        rater.rate(jokeWithCategory("nerdy"), 5);
        rater.rate(jokeWithCategory("boring"), 5);

        expect(rater.getBestCategory()).toBe(null);
    });
});