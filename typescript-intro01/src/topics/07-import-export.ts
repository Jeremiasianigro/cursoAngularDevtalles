import { taxCalculation, type Product } from './06-function-destructuring';


const shoppinCart: Product [] = [
    {
        description: 'Nokia',
        price:150
    },
    {
        description: 'iPad',
        price:250
    }
]

const [total, tax] = taxCalculation ({
    products: shoppinCart,
    tax:0.15
})

console.log('total !!', total);
console.log('tax !!', tax)
