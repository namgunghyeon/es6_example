function* idMaker() {
    var index = 0;
    while (index < 3) {
        yield index ++;
    }
}

var gen = idMaker()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//0
//1
//2
//undefined

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
    console.log(i)
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);
console.log(gen.next().value);
//generator 아래 yield
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//위 3개는 anotherGenerator에 있는 yield
console.log(gen.next().value);
//마지막 yield
console.log(gen.next().value);


function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
}

var gen = logGenerator();

gen.next();
gen.next('pretzel');
gen.next('california');
gen.next('mayonnaise');
