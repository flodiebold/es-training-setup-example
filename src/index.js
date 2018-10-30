/* @flow */

import { foo } from "./module";

console.log("Hello world", foo(3));

document.getElementById("content").append("Hello world");
