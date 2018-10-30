// we tell jest to mock the module:
import { foo } from "./module";

jest.mock("./module");

test("now foo is a mock", () => {
    foo.mockReturnValue(3);
    expect(foo(3)).toEqual(3);
});
