 "use strict";
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // 같은 변수
        console.log(x);
    }
    console.log(x);
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // 다른 변수
        console.log(x);
    }
    console.log(x);
}
console.log('varTest')
varTest()
console.log('letTest')
letTest()
