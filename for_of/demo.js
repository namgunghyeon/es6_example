 "use strict";
let iterable = [10, 20, 30];

for (let value of iterable) {
    console.log(value);
}

for (const value of iterable) {
    console.log(value);
}

iterable = "boo";
for (let value of iterable) {
    console.log(value);
}

iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
    console.log(value);
}

iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
    console.log(entry);
}

iterable = new Set([1, 1, 2, 2, 3, 3]);
//중복 없는 데이터 셋
for (let value of iterable) {
  console.log(value);
}
