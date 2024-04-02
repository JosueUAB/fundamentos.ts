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
 * !
 */
function multiply (firtsNumber:number, secondNumber?:number, base:number =2){
    return firtsNumber*base;
}
const multiplyResult: number = multiply(5);
console.log({multiplyResult});
console.table({multiplyResult});

//#endregion funcion


export{};