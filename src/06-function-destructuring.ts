
export interface Produc{
    description : string;
    price: number;
}

//objetos
const phone:Produc={
    description: "Nokia A1",
    price: 150.0
}
const {description:descripcion, price:precio} = phone;

console.log(descripcion,precio);
const tablet: Produc={
    description: 'aipad air',
    price:250
}
const {description:descr,price:prec}=tablet;


interface taxCalculationOptions{
    tax: number;
    products:Produc[];
}

export function taxCalculation(option:taxCalculationOptions):number[]{
    let total =0;
    option.products.forEach(product=> {
        //= total+product.price; 
        total+= product.price;
    });
    return[total,total*option.tax]
}



const shopingcart=[phone,tablet];
const tax =0.15; 

const [total,taxx] = taxCalculation({
    products:shopingcart,
    tax
}); 


console.log('total ',total);
console.log('tax ',taxx);


//funcion











//export{};