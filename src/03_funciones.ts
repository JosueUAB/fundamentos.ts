// #region funcion
function addNumber(a:number,b:number){

    return a+b;
}
addNumber(1,3);
const result:number = addNumber(2,3);
console.log({result})


/** 
 * !funciones de flecha
 */
const AddNumbersArrow= (a:number,b:number):string=>{
    return `${ a + b }`;
}

const resultx: string =AddNumbersArrow(2,2);

console.log({resultx});

/**
 * !funciones
 */
function multiply (firtsNumber:number, secondNumber?:number, base:number =2){
    return firtsNumber*base;
}
const multiplyResult: number = multiply(5);
//console.log({multiplyResult});
//console.table({multiplyResult});


//#endregion funcion


interface character{
    name: string;
    hp : number;
    showHp:()=>void;
}



const healcharacter =(character:character,amount:number) =>{
        character.hp+=amount;

}

const strider :character = {
    name: 'strider',
    hp : 50,
    showHp (){
        console.log(`puntos de vida ${this.hp}`);
    }
}
healcharacter (strider,10);
healcharacter (strider,110);
strider.showHp();
export{};