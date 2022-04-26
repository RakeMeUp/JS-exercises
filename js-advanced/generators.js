function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}

const genObj = simpleGenerator();
const genObj2 = simpleGenerator();

// const obj = genObj.next();
// console.log(obj)

console.log(genObj.next())
console.log(genObj.next())
console.log(genObj2.next())
console.log(genObj2.next())

// INF LOOPS

function* generateID(){
    let id = 1;

    while(true){
        yield id;
        ++id;
    }
}

const idObj = generateID();
console.log(idObj.next())
console.log(idObj.next())
console.log(idObj.next())
console.log(idObj.next())
console.log(idObj.next())

const idObj2 = generateID();
console.log(idObj2.next())
console.log(idObj2.next())
console.log(idObj2.next())
console.log(idObj2.next())


function* advGenerateID(){
    let id = 1;

    while(true){
        const increment = yield id;
        if (increment != null){
            id += increment;
        }else {
            ++id;
        }
    }
}

const advIDObj = advGenerateID();
console.log(advIDObj.next())
console.log(advIDObj.next())
console.log(advIDObj.next(2))   // inc by 2
console.log(advIDObj.next())

console.log(advIDObj.return(10))

// console.log(advIDObj.throw(new Error("error occured")))

