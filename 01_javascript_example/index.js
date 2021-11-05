const x = 11;

const outer = () => {
    const x = 15;
    const inner = () => {
        console.log(x);
    }
    return inner;
}

const returnedFnc = outer();

inner(); // prints 15
