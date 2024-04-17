/*
    ===== Código de TypeScript =====
*/


interface SuperHero{
    name:string;
    age:number;
    address: Address;
    showAddress:() => void;
}
interface Address{
    street:string;
        counrty: string;
        city:string;
}



const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: ' Main St',
        counrty: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.counrty;
    }
}


const address = superHeroe.showAddress();
console.log( address );



 export{};
