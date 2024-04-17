//#region desectructuracionDeObjetos

interface AudioPlayer{
    audiVolume: Number;
    SongDuration:number;
    song:string;
    detail:Detail; 
}
interface Detail{
    author: string;
    year:number;
}
const AudioPlayer:AudioPlayer={
    audiVolume: 90,
    SongDuration: 36,
    song: "Mess",
    detail: {
        author: 'ed shear',
        year: 2015
    }
}
// ! SIN desectruracion
console.log('song: ', AudioPlayer.song);
console.log('Authot: ',AudioPlayer.SongDuration);
console.log('Authot: ',AudioPlayer.detail.author);


// *TODO : USANDO LA DESECTRUCTURACION
// *TODO : la idea de la desectructuracion es extraer esas piesaas que nos interesa
//*TODO DE MANERA RAPIDA */

// !detail:{author:autor,year:anio} el metodo dentro de la desectructuracion audio player
const{song:anotherSong, SongDuration:duration,detail }= AudioPlayer;

//** el recomendado   es hacerlo por separado notese que arriba se us detail pero se desectructura por separado*/

const {author:autor, year:anio}=detail;
// 
console.log('song: ', anotherSong);
console.log('Authot: ',duration);



//**desectructural del autor */




console.log('Author: ',autor);
console.log(': ',anio);
//#endregion desectructuracionDeObjetos


//#region DesectructuracionDeArreglos
console.log('*****************************+');
//const dbz: string[]= ['goky','vegeta','trunks'];

const [p1,,trunks='not found']: string[]= ['goky','vegeta',];

console.log('personaje 3',trunks)
//#endregion DesectructuracionDeArreglos



export{};