const userPlayer = ['Miku', 'Miki', 'Miki', 'Mika'];
let isVIP : boolean | string;
let  age : number;
let  userFlagComments : any;

let userName : string =  userPlayer[Math.floor(Math.random() * userPlayer.length -1)];

const sum =(...arr : number[]) =>{
    // let result : any ;
    let number = [...arr];
    number.forEach((num)=>{
         number += num;
         console.log(typeof(num));
    })

    // return result;
}

console.log(sum(2,3,4,5,5))

const multiply = (a: number, b :number)=>{
    return a * b;
}

console.log(multiply(4,4))