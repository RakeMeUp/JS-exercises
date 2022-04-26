//Lexical Scoping
function nestedScope(){
    let a = 10;
    function outer(){
        let b = 20;
        function inner(){
            let c = 30;
            console.log(a,b,c);
        }
        inner();
    }
    outer();
}

function closures1(){
    function outer(){
        let counter = 0;
        function inner(){
            ++counter;
            console.log(counter);
        }
        inner();
    }
    outer();
    outer();
}

function closures2(){
    // JS returns not just the function def, but the scope too. the scope
    // variables are saved, so when the fn called twice, the variable 
    // acts like its a reference;
    function outer(){
        let counter = 0;
        function inner(){
            ++counter;
            console.log(counter);
        }
        return inner;
    }
    const fn = outer();
    fn();
    fn();
}

function sum(a,b,c){
    return a+b+c;
}

function currying(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}



module.exports["nestedScope"] = nestedScope;
module.exports["closures1"] = closures1;
module.exports["closures2"] = closures2;
module.exports["sum"] = sum;
module.exports["currying"] = currying;