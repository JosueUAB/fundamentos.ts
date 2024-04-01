


//let name = 'israel';


//console.log(name);


// #region tipos_de_datos

// ! podemos agregar  a una variable 2 tipos de datos
// * como no es una constante el valor de esta puede cambiar posteriormente
let hpPoint : number | string  = 95;

// * aqui se cambia el valor de @hpPoint a tipo string de tipo numerico y no tenemos ninguna  falla
hpPoint= 'FULL';

console.log('Los puntos totales son : ', hpPoint);

const namex: string ='israelx';
let Puntos: number= 88;
const isAlive: boolean = true;


console.log({
    namex,Puntos,isAlive
})
// #endregion tipos_de_datos

export{};
