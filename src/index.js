/* @flow */

import { foo } from "./module";

console.log("Hello world", foo(3));

const element = document.getElementById("content");

if (element) {
    element.append("Hello world");
}
