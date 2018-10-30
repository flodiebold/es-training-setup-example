
describe("asynchronous testing", () => {
    it("works by returning a Promise", () =>
        new Promise(resolve => setTimeout(resolve, 100)).then(() => expect(1).toBe(1))
    );

    it("works with async functions", async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        expect(2).toBe(2);
    });
});
