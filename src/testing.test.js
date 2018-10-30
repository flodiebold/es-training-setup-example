function timeoutPromise(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

describe("asynchronous testing", () => {
    it("works by returning a Promise", () => {
        return timeoutPromise(100).then(() => expect(1).toBe(1));
    });

    it("works with async functions", async () => {
        await timeoutPromise(100);
        expect(2).toBe(2);
    });
});
