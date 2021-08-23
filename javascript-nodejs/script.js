var input = require('fs').readFileSync('stdin.txt', 'utf8');
let coeficientes = input.split(' ');
let a = parseFloat(coeficientes[0])
let b = parseFloat(coeficientes[1])
let c = parseFloat(coeficientes[2])
let delta = Math.pow(b, 2)- 4*a*c
if(a <= 0 || delta < 0)
    console.log('Impossivel calcular')
else{
    let r1 = (-b + Math.sqrt(delta))/(2*a)
    let r2 = (-b - Math.sqrt(delta))/(2*a)
    console.log(`R1 = ${r1}`)
    console.log(`R2 = ${r2}`)
}
    