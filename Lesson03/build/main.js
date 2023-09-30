"use strict";
let myLanguageSkills = ['English', 'German', 'Chinese', 'France', 'Japanese'];
let myScore = [89, 'Good', 'A+'];
const languageLength = myLanguageSkills.length;
console.log(`The language length : ${languageLength}`);
let newArr = [...myLanguageSkills, ...myScore];
// this tuple type is strict that you can only store depends on the given union typel
let newTupple = ['Hatsune Miku', false, 22, '23'];
let arr = ['Hatsune Miku', 23, true];
arr = [...newTupple];
console.log(arr);
const exampleObject = {
    name: 'Hatsune Miku',
    nationality: 'Japan',
    age: 23,
    height: 160,
    weight: 50,
};
exampleObject.name = 'Miku Hatsune';
const player1 = {
    username: 'Hatsune Miku',
    baseAttack: 72,
    baseHp: 500,
    baseArmor: 5,
    isMagic: true
};
// we can passed the type as parameter ;
const showUsernameKnight = (knight) => {
    return `Hello ${knight.username}`;
};
console.log(showUsernameKnight(player1));
// 1:03:45
