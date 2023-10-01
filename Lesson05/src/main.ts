// type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type knight = {
    name?: string,
    attackDamage: number,
    stats: stringOrNumberArray
}

type userId = stringOrNumber;

// end of type aliases

//  Literal types'
let icon: '🇯🇵' | '🇰🇷' | '🇩🇪' | '🇨🇳' | '🇺🇸' | '🇫🇷' | '🇪🇸' | '🇮🇹' | '🇷🇺' | '🇬🇧';
icon = '🇷🇺'
console.log(icon) 

// end of literal types


// functions 
const circumferences = (l: number, w: number, h: number =4) => {
    return l * w * h;
}

// this function has no return
const logMessage=(msg:any):void=>{
    console.log(`Here your message : ${msg}`);
}

logMessage('Hi there');
console.log(circumferences(2,5,2))