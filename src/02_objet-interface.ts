/**
 * Objetos e interfaces
 */


/**
 * ! es una buena practica definir el tipo
 * *en este caso  podia asignar cualquier valor
 * * pero cmo se le asigno string dio errores en 
 * *true y el 123 que es numerico  y boleando
 */
let skills:string []= [
    'bash',
    'counter',
    'healing',
    //true,
    //123
]
/**
 * ! UNA INTERFACE ES UNA PROMESA PARA QUE SEA TRANSPILADO
 * ! A JS
 */
interface character {
    name:string;
    hp: number;
    skills: string[];
    //! al decir despues de la variable >?< es opcional
    homerown?:string;
}
/**
 *  ! con ctrl + .  se agrega los valores de la interfave que falta
 */
const strider:character ={
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter'],
};


strider.homerown='RIVERDELL';


console.table(strider);

export{};