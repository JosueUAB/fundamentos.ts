
//! un decorador es una function


function classDecorator(
    constructor : any
){
    return class extends constructor{
        newProperty = 'new property';
        hello ='overide'
    }
    

}
//@classDecorator
class superClass{
    public myProperty:string ='abc123';
    
    print(){
        console.log('hola mundo');
    }
}

console.log(superClass);
const myClass = new superClass();
console.log(myClass);
