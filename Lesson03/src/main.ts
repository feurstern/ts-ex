let myLanguageSkills = ['English', 'German', 'Chinese', 'France', 'Japanese'];
let myScore = [89, 'Good', 'A+'];

const languageLength = myLanguageSkills.length;
console.log(`The language length : ${languageLength}`)

let newArr = [...myLanguageSkills, ...myScore];

// this tuple type is strict that you can only store depends on the given union typel
let newTupple: [string, boolean, number, string] = ['Hatsune Miku', false, 22, '23'];
let arr = ['Hatsune Miku', 23, true];
arr = [...newTupple]
console.log(arr)

const exampleObject = {
    name: 'Hatsune Miku',
    nationality: 'Japan',
    age: 23,
    height: 160,
    weight: 50,
}

exampleObject.name = 'Miku Hatsune'

type Knight = {
    username?: string,
    baseAttack?: number,
    baseHp: number,
    baseArmor: number,
    isMagic: boolean,
}
interface Archer {
    usernam?: string,
    baseAttack?: number,
    baseHp: number,
    baseArmor: number,
    isMagic?: true,
}
// I know how hard to accept that fact whe I love for being a part of people that where your trust can gradually be rebuilt

const player1: Knight = {
    username: 'Hatsune Miku',
    baseAttack: 72,
    baseHp: 500,
    baseArmor: 5,
    isMagic: true
}

// we can passed the type as parameter ;
const showUsernameKnight = (knight: Knight) => {
    if(knight.username){
        return `Hello ${knight.username?.toUpperCase()}`
    }
    return `Hello!`
}

console.log(showUsernameKnight(player1))

// Enums
enum languageSkills{
    Japanese = 'jp',
    English ='en',
    Chinese ='cn',
    German ='de'
}
console.log(languageSkills.Chinese)


