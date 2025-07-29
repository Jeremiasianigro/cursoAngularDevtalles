// ejemplo 1 de class
// export class Person {
//     public name?: string;
//     private address?: string;
    
//     constructor (name: string, address: string){
//         this.name = name,
//         this.address = address
//     }
// }

export class Person {
    
    
    constructor (
        public name: string,
        private address:string = 'No address',
    ){}
        
};

export class Hero extends Person {
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, 'San Miguel')
    }
}

const jeremias = new Hero('Batman', 39, 'Bruse Wayne');

console.log(jeremias)