export class Person {
   // public name?: string;
    //private address? : string;
    /*
    constructor( name: string , address:string){
        this.name = name;
        this.address=address;
    }
    */
   constructor(
    public name:string, 
    private address:string ='no address'
    ){}
}

//extemdr una clase
// export class hero extends person{
//     constructor(
//         public alterego:string,
//         public age: number,
//         public realName : string,
//     ){
//         super(realName , 'bolivia');
//     }

// }


export class hero{
   // public person : person;
    constructor(
        public alterego:string,
        public age: number,
        public realName : string,
        public person: Person,
    ){
       // this.person= new person(realName);
       
    }

}
const tonny = new Person('tonny start', 'new yprk')
const iromam = new hero('irom man' ,45,'tonny',tonny);
console.log(iromam);

