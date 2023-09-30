const t = [1, 23, 4, 5, 4];
const t1 = [2, 4, 1, 2, 32, 4, 'ts'];
const t3 = [...t, ...t1];

t3.forEach((data) => {
    console.log(data);
    let result = data / 2;
    console.log(typeof(result))
})

let a: number = 2;
let b: number = 4;
let c: number = a * b;

console.log(c)

// 21:05