function clasDecorator<T extends {new (...arg:any[]) : {}}> (
    constructor: T
){
    return class extends constructor {
        newProperty = "new property"
        hello = "override"
    }
}   

@clasDecorator
export class MiSuperClase {

    public miProperty: string = "propiedad de la clase";
    
    print(){
        console.log("Hola mundo");  
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase);