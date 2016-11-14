 "use strict";

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

var polygon = new Polygon(1, 2);
console.log('area : ', polygon.area);
console.log('area : ', polygon.calcArea);
console.log('area : ', polygon.calcArea());


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.y;
        const dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}
var aPoint = new Point(1, 2);
var bPoint = new Point(2, 1);


console.log('distance : ', Point.distance(aPoint, bPoint));

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' make a nose');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

var dog = new Dog('choco');
dog.speak();


class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' make a nose');
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
    }
}
var lion = new Lion('king');
lion.speak()


class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

var array = new MyArray(1,2,3);
var mapped = array.map(x => {
    return x * x
});
console.log(mapped)
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
