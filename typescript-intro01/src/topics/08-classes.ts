
//* ejemplo 1 de class
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
        public firstName: string,
        public lastName: string,
        private address:string = 'No address',
    ){}
        
};
 //* ejemplo 1 extends
// export class Hero extends Person {
//     constructor (
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'San Miguel')
//     }
// }

//* ejemplo 2 instanciar un objeto fuera del constructor
// export class Hero {

//     public person: Person;

//     constructor (
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         this.person = new Person(realName)
//      }
// }

//* ejempl 3 instanciar el objeto dentro del constructor
export class Hero {

    

    constructor (
        public alterEgo: string,
        public age: number,
        public person: Person,

    ){}
}

const Bruce = new Person('Bruce', 'Wayne', 'New York')
const Batman = new Hero('Batman', 39, Bruce);

console.log(Batman);