






export function whatsMyType<T>(argument:T):T {
    return argument;
}
let amlString= whatsMyType<string>('hola muando');
let AmlNumber = whatsMyType<number>(100);
let amlArray = whatsMyType<number[]>([1,2,3,4,5,6]);

console.log(amlString.split('') );
console.log(AmlNumber.toFixed());
console.log(amlArray.join('-') );
