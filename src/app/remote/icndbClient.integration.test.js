import ICNDBClient from "./icndbClient";

describe("ICNDBClient", () => {
    const client = new ICNDBClient();

    it("fetches random jokes from ICNDB", async () => {
        const joke = await client.getRandomJoke();

        expect(joke.id).not.toBeFalsy();
        expect(joke.joke).not.toBeFalsy();
        expect(joke.categories).not.toBe(null);
    });

    it("fetches jokes by category", async () => {
        const joke = await client.getJokeByCategory("nerdy");
        expect(new Set(joke.categories).has("nerdy")).toBe(true);
    });

    it("fetches jokes by id", async () => {
        const joke = await client.getJokeById(42);
        expect(joke.id).toBe(42);
    });
});