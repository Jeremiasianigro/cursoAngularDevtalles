

function addNumber (a: number, b: number){
   return a+b;
}

const addNumberArrow = (a: number, b: number) : string =>{

    return `${a +b}`;
}

function multiply (firsNumber: number, secondNumber?: number, base: number = 2 ) {
        return firsNumber * base;
}


const result: number = addNumber (1,2)
const result2: string = addNumberArrow (6,9)
const multiplyResult: number = multiply (5)


console.log({result, result2, multiplyResult})

export{}