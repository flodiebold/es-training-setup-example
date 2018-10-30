import { foo } from "./module";

test("foo multiplies stuff by 2", () => {
    expect(foo(3)).toEqual(6);
});
