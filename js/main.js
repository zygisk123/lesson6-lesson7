console.log("Lengvesni");
console.log("1 uzduotis");

for (let i = 0; i < 10; i++) {
    console.log("Labas");
    
}
console.log("2 uzduotis");

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
console.log("3 uzduotis");
let augalai = ["azuolas", "berzas", "tulpe", "liepa", "drebule", "pomidoras", "agurkas", "vynuoge", "rugiagele", "narcizas"];

console.log("4 uzduotis");
for (let i = 0; i < augalai.length; i++) {
    console.log(augalai[i]);
    
}
console.log("5 uzduotis");
for (let i = augalai.length - 1; i >= 0; i--) {
    console.log(augalai[i]);
    
}
console.log("6 uzduotis");
let i = 10;
for (; i <= 50; i+=2) {
    console.log(i);
}
console.log("7 uzduotis");
let a = 10;
for (; a <= 50; a+=2) {
    if(a / 10 - Math.floor(a / 10) == 0){
        continue;
    }
    console.log(a);
}
let evenNum = 0;
console.log("8 uzduotis");
for (let i = 0; i <= 20; i++) {
    if ( i%2 == 0){
        evenNum++;
    }
}
console.log(evenNum);

console.log("9 uzduotis");

let longerThan7 = 0;
let shorterThan5 = 0;

for (let i = 0; i < augalai.length; i++) {
    if(augalai[i].length < 5){
        shorterThan5++;
    }
    if(augalai[i].length > 7){
        longerThan7++;
    }
}

console.log("Zodziu sk.(ilgesni nei 7 symboliai): " + longerThan7);
console.log("Zodziu sk.(trumpesni nei 5 symboliai): " + shorterThan5);

console.log("Sunkesni");
console.log("1 uzduotis");
let more150 = 0;
let numberList = "";

for (let i = 0; i < 300; i++) {
    let randomNum = Math.round(Math.random() * 300);
    if (randomNum <= 275){
        numberList += randomNum;
        numberList += " ";
    } else{
        numberList += "[";
         numberList += randomNum;
         numberList += "] ";
    }
    if (randomNum > 150){
        more150++
    }
}
console.log("Daugiau nei 150 yra: " + more150 + " sk.");
console.log(numberList);

console.log("2 uzduotis");

let numberArray = [];
let arrayIndex = 0;
for (let i = 1; i <= 3000; i++) {
    if(i % 77 == 0){
        arrayIndex++;
        numberArray[arrayIndex] = i;
    }
}
console.log(numberArray[i]);
console.log("3 uzduotis");
console.log("4 uzduotis");
console.log("5 uzduotis");
console.log("6 uzduotis");
console.log("7 uzduotis");
console.log("8 uzduotis");
console.log("9 uzduotis");
