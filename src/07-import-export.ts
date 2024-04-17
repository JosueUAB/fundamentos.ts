import{Produc, taxCalculation} from './06-function-destructuring'

const shopingCart: Produc[]=[
    {
        description: 'nokia',
        price:122,
    },
    {
        description: 'samsung',
        price:150,
    }
];

const [total,tax]= taxCalculation({
    products:shopingCart,
    tax: 0.15,
});

console.log('total ',total);
console.log('tax ',tax); 
