
import * as Module from "./module";

describe("Module", () => {
    it("multiplies stuff by 2", () => {
        expect(Module.foo(3)).toEqual(6);
    });
});
