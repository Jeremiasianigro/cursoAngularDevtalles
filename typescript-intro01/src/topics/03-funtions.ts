

function addNumber (a: number, b: number){
   return a+b;
}

const addNumberArrow = (a: number, b: number) : string =>{

    return `${a +b}`;
}

function multiply (firsNumber: number, secondNumber?: number, base: number = 2 ) {
        return firsNumber * base;
}


// const result: number = addNumber (1,2)
// const result2: string = addNumberArrow (6,9)
// const multiplyResult: number = multiply (5)
// console.log({result, result2, multiplyResult})


interface Character {
    name: string;
    hp: number
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number ) => {

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp (){
        console.log(`Puntos de vida ${this.hp}`)
    }

}

healCharacter(strider, 50)
strider.showHp();

export{}