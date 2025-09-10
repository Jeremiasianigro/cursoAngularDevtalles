export function whatsMyType<T>(arg: T): T {
  return arg;
}   

const aString = whatsMyType("hello");
const aNumber = whatsMyType(42);
const aBoolean = whatsMyType(true);
const anArray = whatsMyType([1, 2, 3]);
const anObject = whatsMyType({ name: "Alice", age: 30 });   

console.log(aString);  // "hello"
console.log(aNumber);  // 42        
console.log(aBoolean); // true
console.log(anArray);  // [1, 2, 3]
console.log(anObject); // { name: "Alice", age: 30 }

// Using explicit type arguments
const explicitString = whatsMyType<string>("explicit");
const explicitNumber = whatsMyType<number>(100);
console.log(explicitString); // "explicit"
console.log(explicitNumber); // 100 