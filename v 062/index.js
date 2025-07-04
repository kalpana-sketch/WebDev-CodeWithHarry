/*
Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:                Shop Name:                Another Word:
Crazy                      Engine                    Bros
Amazing                    Foods                     Limited
Fire                       Garments                  Hub
*/
console.log("JavaScript Exercise 10 - Business Name Generator")

let r1 = Math.random()
console.log(r1)

let r2 = Math.random()
console.log(r2)

let r3 = Math.random()
console.log(r3)

let a, b, c;

if(r1 < 0.33){
    a = "Crazy";
}
else if(r1 > 0.33 && r1 < 0.66) {
    a = "Amazing";
}
else {
    a = "Fire";
}

if(r2 < 0.33){
    b = "Engine";
}
else if(r2 > 0.33 && r2 < 0.66) {
    b = "Foods";
}
else {
    b = "Garments";
}

if(r3 < 0.33){
    c = "Bros";
}
else if(r3 > 0.33 && r3 < 0.66) {
    c = "Limited";
}
else {
    c = "Hub";
}

b_name = `${a}${b}${c}`
console.log(`The business name is ${b_name}`)