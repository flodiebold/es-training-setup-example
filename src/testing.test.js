
describe("asynchronous testing", () => {
    it("works by returning a Promise", () => {
        return new Promise(resolve => setTimeout(resolve, 100)).then(() => console.log("done"));
    });

    it("works with async functions", async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log("done");
    });
});
