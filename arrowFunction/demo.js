//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s) {
    return s.length;
});
var a3 = a.map(s => s.length);
console.log(a2);
console.log(a3);


function Person() {
    this.age = 0;
    setInterval(function growUp() {
        //setInterval 위에 선언된 this와 아래 선언된 this는 서로 다른 this
        this.age++;
   }, 1000);
}

function Person2() {
    var that = this;
    this.age = 0;
    setInterval(function growUp() {
        that.age++;
   }, 1000);
}

function Person3(){
  this.age = 0;
  setInterval(() => {
      //setInterval 위에 선언된 this와 아래 선언된 this는 같은 this
      this.age++;
  }, 1000);
}


 var func = () => ({ foo: 1 });
