function otherFunction(){
    console.log('called from inside function')
}

function receivesAFunction(callback) {
    console.log('do something');
    callback();
}

receivesAFunction(otherFunction);

function returnsANamedFunction() {
    return function returnsANamedFunction(){};
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function (){};
}