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
let numStr = ""
let arrayIndex = 0;
for (let i = 1; i <= 3000; i++) {
    if(i % 77 == 0){
        numStr += i;
        numStr += ", ";
        numberArray[arrayIndex] = i;
        arrayIndex++;
    }
}
console.log(numStr.slice(0, numStr.length-2));
// console.log(numberArray);

console.log("3 uzduotis");

//krastine
let k = 100;

for (let i = 0; i < k; i++) {
    let line = "";
    for (let a = 0; a < k; a++){
        line += "*";
    }
    console.log(line);
}

console.log("4 uzduotis");

for (let i = 0; i < k; i++) {
    let line = "";
    for (let a = 0; a < k; a++){
        if(a == i || a == k - i - 1){
            line += "X";
        }else{
            line += "*";
        }
    }
    console.log(line);
}

console.log("5 uzduotis");
let allResults1 = ""


while(true){
    let result = Math.round(Math.random() * 1);
    if(result == 0){
        allResults1 += "H ";
        console.log("Iskrito herbas!");
        break;
    }else{
        allResults1 += "S ";
    }
}

console.log(allResults1);
// kiek kartu iskrito herbas
let tailNum = 0;
let maxTailNum = 3;
let allResults2 = ""
while(true){
    let result = Math.round(Math.random() * 1);
    if(result == 0){
        allResults2 += "H ";
        tailNum++;
        if(tailNum == maxTailNum){
            console.log("Iskrito trys herbai!");
            break;
        }
    }else{
        allResults2 += "S ";
    }

}

console.log(allResults2);

let allResults3 = ""
let tailNum2 = 0;

while(true){
    let result = Math.round(Math.random() * 1);
    if(result == 0){
        allResults3 += "H ";
        tailNum2++;
        if(tailNum2 == maxTailNum){
            console.log("Iskrito trys herbai is eiles!");
            break;
        }
    }else{
        tailNum2 = 0;
        allResults3 += "S ";
    }

}

console.log(allResults3);

console.log("6 uzduotis");

let PetrasPoints = 0;
let KazysPoints = 0;
// kiek tasku reikia zaidejui surinkti jog jis laimetu zaidima
let maxPts = 222;
let maxPet = 20;
let minPet = 10;

let maxKaz = 25;
let minKaz = 5;

while(true){
    let randomPetrasPoints = Math.round(Math.random() * (maxPet - minPet) + minPet);
    let randomKazysPoints = Math.round(Math.random() * (maxKaz - minKaz) + minKaz);
    PetrasPoints += randomPetrasPoints;
    KazysPoints += randomKazysPoints;
    if(PetrasPoints >= maxPts || KazysPoints >= maxPts){
        if(PetrasPoints >= maxPts && KazysPoints < maxPts){
            console.log("Laimejo Petras!");
            console.log("Petro taskai: " + PetrasPoints);
            console.log("Kazio taskai: " + KazysPoints);
            break;
        }
        if(KazysPoints >= maxPts && PetrasPoints < maxPts){
            console.log("Laimejo Kazys!");
            console.log("Kazio taskai: " + KazysPoints);
            console.log("Petro taskai: " + PetrasPoints);
            break;
        }else{
            if(KazysPoints > PetrasPoints){
                console.log("Laimejo Kazys!");
                console.log("Kazio taskai: " + KazysPoints);
                console.log("Petro taskai: " + PetrasPoints);
                break;
            } else if(KazysPoints < PetrasPoints){
                console.log("Laimejo Petras!");
                console.log("Petro taskai: " + PetrasPoints);
                console.log("Kazio taskai: " + KazysPoints);
                break;
            }else{
                console.log("Lygiosios!");
                console.log("Petro taskai: " + PetrasPoints);
                console.log("Kazio taskai: " + KazysPoints);
                break;
            }
        }
    }

}
console.log("7 uzduotis");

let rhombusHeight = 21;
let ind = 11;

for (let i = 0; i <= rhombusHeight; i++) {
    let row = "";
    for (let a = 0; a < rhombusHeight; a++) {
        // jeigu virsutine rombo dalis
        if (i <= rhombusHeight/2) {
            // jeigu virsutine kairioji rombo dalis
            if(a <= rhombusHeight/2){
                if(a >= rhombusHeight/2 - i){
                    row += "*";
                }
                else{
                    row += " ";
                }
            // jeigu virsutine desinioji rombo dalis
            }else{
                if(a > rhombusHeight - i){
                    row += "*";
                }
            }
        // jeigu apatine rombo dalis
        }else{
            // console.log(i);
            // jeigu apatine kairioji rombo dalis
            if(a <= rhombusHeight/2){
                if (a >= rhombusHeight / 2 - (ind-(i-ind))){
                    row += "*";
                }
                else{
                    row += " ";
                }
            }
            // jeigu apatine desinioji rombo dalis
            else{
                if(a <= rhombusHeight - (i-10)){
                    row += "*";

                }
                else{
                    row += " ";
                }

            }
        }
    }
    console.log(row);
}

console.log("8 uzduotis");

let nailHeight = 85;
//mazu smugiu stiprumas
let min = 5;
let max = 20;

//dideliu smugiu stiprumas
let min2 = 20;
let max2 = 30;
let hitNum = 0;

let nailArray = [0,0,0,0,0];

//Jeigu reikes atvaizduoti viniu kalima
//let nailArray = [[],[],[],[],[]];
// function nail() {
//     for (let i = 0; i < nailArray.length; i++) {
//         for (let a = 0; a < nailHeight; a++) {
//             nailArray[i][a] = "#";
            
//         } 
//     }
//     console.log(true);
//     for (let i = 0; i < nailArray.length; i++) {
//         while (true) {
//             let hit1 = Math.round(Math.random() * (max - min) + min);
//             hitNum++;
//             nailArray[i].length -= 1;
//             if (nailArray.length <= 0){
//                 console.log("Vinis nr. " + i + "yra sukalta");
//                 console.log("Jai sukalti reikejo " + hitNum + "smugiu");
//                 hitNum = 0;
//                 break;
//             }
//             console.log(nailArray);

//         }
//         // for (let a = 0; a < nailHeight; a++) {
//         //     nailArray[i][a] = "#";
            
//         // } 
//     }
// }
// nail();

console.log("Vinies ilgis: " + (nailHeight / 10) + " cm");
console.log("Smugiu stiprumas svyruoja nuo " + min + " mm iki " + max + " mm");

for (let i = 0; i < nailArray.length; i++) {
    while(true){
        let hit1 = Math.round(Math.random() * (max - min) + min);
        hitNum++;
        nailArray[i] += hit1;
        if(nailArray[i] >= nailHeight){
            console.log("Vinis nr. " + (i + 1) + " yra sukalta");
            console.log("Jai sukalti reikejo " + hitNum + " smugiu");
            hitNum = 0;
            nailArray[i] = 0
            break;
        }
    }    
}
console.log(" ");
console.log("Vinies ilgis: " + (nailHeight / 10) + " cm");
console.log("Smugiu stiprumas svyruoja nuo " + min2 + " mm iki " + max2 + " mm");

for (let i = 0; i < nailArray.length; i++) {
    while(true){
        if(Math.round(Math.random() * 10) >= 5){
            let hit1 = Math.round(Math.random() * (max2 - min2) + min2);
            hitNum++;
            nailArray[i] += hit1;
            if(nailArray[i] >= nailHeight){
                console.log("Vinis nr. " + (i + 1) + " yra sukalta");
                console.log("Jai sukalti reikejo " + hitNum + " smugiu");
                hitNum = 0;
                nailArray[i] = 0
                break;
            }
        }
        else{
            hitNum++;
        }
    }    
}

console.log("9 uzduotis");

let stringLength = 50;
let min3 = 1;
let max3 = 200;
let string = "";
let array1 = [];
let string2 = "";
let array2 = [];
let randomNumArray = [];

for (let i = 0; i < stringLength; i++) {
    let randomNum = Math.round(Math.random() * (max3 - min3) + min3);
    let NumExist = false;
    for (let a = 0; a < randomNumArray.length; a++) {
        if(randomNumArray[a] == randomNum){
            NumExist = true;
        }
    }
    if(!NumExist){
        string += randomNum;
        string += " ";
    }
}

console.log(string);

array1 = string.split(" ");

console.log(array1);

for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 > 0) {
        string2 += array1[i];
        string2 +=" ";
    }   
}

console.log(string2);
array2 = string2.split(" ");

array2.sort(function(a, b){return a-b});

console.log(array2);

console.log("Masyvai");
console.log("1 uzduotis");
let arrayNum = [];
let arrayNumLength = 30;
let max4 = 25;
let min4 = 5;
for (let i = 0; i < arrayNumLength; i++) {
    arrayNum[i] = Math.round(Math.random() * (max4 - min4) + min4);
}
console.log(arrayNum);

console.log("2 uzduotis");
let more10 = 0;
let maxValue = 0;
let arraySum = 0;
// pirmo uzdav masyvu reiksmes minus ndeksu sk
let arrayNum2 = [];
// arrayNum2 + 10 elementu
let arrayNum3 = [];

let evenNumArray = [];
let evenNumIndex = 0;
let oddNumArray = [];
let oddNumIndex = 0;

// indexas pirmo elemento kuris yra didesnis uz 10
let index = 0;

//kiek arrayNum yra reiksmiu didesniu nei 10
for (let i = 0; i < arrayNum.length; i++) {
    if(arrayNum[i] > 10){
        more10++;
    }
    if(arrayNum[i] > maxValue){
        maxValue = arrayNum[i];
    }
    arraySum += arrayNum[i];
    arrayNum2[i] = arrayNum[i] - i;    
}

let arraylength = arrayNum.length;
for (let i = arraylength; i < arraylength + 9; i++) {
    arrayNum[i] = Math.round(Math.random() * (max4 - min4) + min4);
}

for (let i = 0; i < arrayNum.length; i++) {
    if (i % 2 == 0) {
        evenNumArray[evenNumIndex] = i;
        evenNumIndex++;
    }else{
        oddNumArray[oddNumIndex] = i;
        oddNumIndex++;
    }
    
}

for (let i = 0; i < arrayNum.length; i++) {
    if (i >= 15) {
        arrayNum[i] = 0;
    }    
}

let indexID = 0;
for (let i = 0; i < arrayNum.length; i++) {
    if(arrayNum[i] > 10){
        index = i;
        break;
    }
}


console.log("Masyve yra " + more10 +" sk. didesniu nei 10");
console.log("Didziausia masyvo reiksme: " + maxValue);
console.log("Masyvo suma: " + arraySum);
console.log(arrayNum2);
console.log(arrayNum);
console.log("Even indexes array: " + evenNumArray);
console.log("Odd indexes array: " + oddNumArray);
console.log("indexas pirmo elemento kuris yra didesnis uz 10: " + index);

for (let i = 0; i < arrayNum.length; i++) {
    if(i % 2 == 0){
        delete arrayNum[i];
    }
}
console.log(arrayNum);

console.log("3 uzduotis");
let arrayChar = ["A","B","C","D"];
let arrayChar2 = [];
let arrayChar2Length = 200;
let NumA = 0;
let NumB = 0;
let NumC = 0;
let NumD = 0;

for (let i = 0; i < arrayChar2Length; i++) {
    let randomID = Math.round(Math.random()* (arrayChar.length-1));
    arrayChar2[i] = arrayChar[randomID];    
}

for (let i = 0; i < arrayChar2.length; i++) {
    if (arrayChar2[i] == "A") {
        NumA++
    }
    if (arrayChar2[i] == "B") {
        NumB++
    }
    if (arrayChar2[i] == "C") {
        NumC++
    }
    if (arrayChar2[i] == "D") {
        NumD++
    }
}
console.log(arrayChar2);
console.log("NumA: " + NumA);
console.log("NumB: " + NumB);
console.log("NumC: " + NumC);
console.log("NumD: " + NumD);

console.log("4 uzduotis");
console.log(arrayChar2.sort());

console.log("5 uzduotis");

let Char = ["A","B","C","D"];
let arraysLength = 200;
let arrays = [[],[],[]];
let combinedArray = "";
let combinedArray2 = [];
let arrayChar3 = [];
let arrayChar4 = [];
let arrayChar5 = [];
let newNum = 0;

// for (let i = 0; i < arraysLength; i++) {
//     let randomID = Math.round(Math.random()* (Char.length-1));
//     arrayChar3[i] = Char[randomID];
//     randomID = Math.round(Math.random()* (Char.length-1));
//     arrayChar4[i] = Char[randomID];
//     randomID = Math.round(Math.random()* (Char.length-1));
//     arrayChar5[i] = Char[randomID];
// }

for (let i = 0; i < arrays.length; i++) {
    for (let a = 0; a < arraysLength; a++) {
        let randomID = Math.round(Math.random()* (Char.length-1));
        arrays[i][a] = Char[randomID];
        
    }
}

for (let a = 0; a < arraysLength; a++) {
    for (let i = 0; i < arrays.length; i++) {
        newNum++;
        combinedArray += arrays[i][a];   
    }
    combinedArray += " ";  
}
console.log(arrays);
console.log(newNum);
console.log(combinedArray);

combinedArray2 = combinedArray.split(" ");

console.log(combinedArray2);

function getUniqueArray(_array)
{
  // in the newArray get only the elements which pass the test implemented by the filter function.
  // the test is to check if the element's index is same as the index passed in the argument.
  let newArray = _array.filter((element, index, array) => array.indexOf(element) === index);
  return newArray
}
let newArray = getUniqueArray(combinedArray2);
console.log("Num of unique symbols: " + newArray.length);

console.log("6 uzduotis");
let array4 = [];
let array5 = [];
let min5 = 100;
let max5 = 999;
let length = 100;

function createArray(array) {
    for (let i = 0; i <length; i++) {
        let randomNum = Math.round(Math.random() * (max5 - min5) + min5);
        array[i] = randomNum
    }
}

while(true){
    createArray(array4);
    array4 = getUniqueArray(array4);
    if(array4.length == length){
        console.log(array4);
        break;
    }
}

while(true){
    createArray(array5);
    array5 = getUniqueArray(array5);
    if(array5.length == length){
        console.log(array5);
        break;
    }
}

console.log("7 uzduotis");

let newUniqueArray = [];
let newUniqueArrayID = 0
let canSave = true;

for (let i = 0; i < array4.length; i++) {
    for (let a = 0; a < array5.length; a++) {
        if (array4[i] == array5[a]) {
            canSave = false;
        }
    }
    if (canSave == true) {
        newUniqueArray[newUniqueArrayID] = array4[i];
        newUniqueArrayID++;
    }else{
        canSave = true;
    }  
}

console.log(newUniqueArray);

console.log("8 uzduotis");

let newUniqueArray2 = [];
let newUniqueArrayID2 = 0
let canSave2 = false;

for (let i = 0; i < array4.length; i++) {
    for (let a = 0; a < array5.length; a++) {
        if (array4[i] == array5[a]) {
            canSave2 = true;
        }
    }
    if (canSave2 == true) {
        newUniqueArray2[newUniqueArrayID2] = array4[i];
        newUniqueArrayID2++;
        canSave2 = false;
    }
}

console.log(newUniqueArray2);

console.log("9 uzduotis");
obj = {};

for (let i = 0; i < array4.length; i++) {
    obj[array4[i]] = array5[i];
}

console.log(obj);

console.log("10 uzduotis");
let arrayLength2 = 10;
let newArray2 = [];
let min6 = 5;
let max6 = 25;

for (let i = 0; i < arrayLength2; i++) {
    if(i <= 1){
        let randomNum = Math.round(Math.random() * (max6 - min6) + min6);
        newArray2[i] = randomNum;
    }else{
        newArray2[i] = newArray2[i-2] + newArray2[i-1];
    }
}
console.log(newArray2);

console.log("11 uzduotis");
let newArray3 = [];
let arrayLength3 = 101;
let maxValue2 = 0;
let maxValueID = 0;
let exmpID = 0;
let sum1 = 0;
let sum2 = 0;
let firstArrayHalf = [];
let secondArrayHalf = [];
function createArray3(array, length){
    let newArray3ID = 0;
    let numIsUnique = true;
    let min7 = 0;
    let max7 = 300;
    for (let i = 0; array.length < length; i++) {
        let randomNum = Math.round(Math.random() * (max7 - min7) + min7);
        if(array.length <= 0){
            array[0] = randomNum;
        }else{
            for (let a = 0; a < array.length; a++){
                if (array[a] == randomNum) {
                    numIsUnique = false;
                }
                if(numIsUnique == true && a == array.length - 1){
                    array[newArray3ID] = randomNum;
                    newArray3ID++;
                }
            }
            numIsUnique = true;
        }
    }
    
    console.log(newArray3);
}

function findMax2(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue2) {
            maxValue2 = array[i];
            maxValueID = i;
        }
    }
   // console.log(maxValue2);
}
function moveMaxToMid(array, maxVal, maxValID){
    let midID = Math.round(arrayLength3/2);
    let tempValue = array[midID]
    array[midID] = maxVal;
    array[maxValID] = tempValue;
}
function fixArraySides(array){
    firstArrayHalf = array.slice(0, 51).sort(function(a, b){return a-b});
    
    secondArrayHalf = array.slice(52, array.length).sort(function(a, b){return b-a});
    
    for (let i = 0; i < 51; i++) {
        array[i] = firstArrayHalf[i]
    }
    for (let i = 52; i < array.length; i++) {
        array[i] = secondArrayHalf[i-51]
    }
    console.log(array);
}
// randama abieju pusiu suma
function findSum(array){
    suma = 0;
    for (let i = 0; i < array.length; i++) {
       // if(!isNaN(array[i])){
            suma += array[i];
       //}
    }
    console.log(suma);
    return suma;
}

while(true) {
    createArray3(newArray3, arrayLength3);
    findMax2(newArray3);
    moveMaxToMid(newArray3, maxValue2, maxValueID);
    fixArraySides(newArray3);
    sum1 = findSum(firstArrayHalf);
    sum2 = findSum(secondArrayHalf);
    sum = sum1-sum2;
    console.log(sum);
    if (Math.abs(sum) < 30) {
        console.log("|Sum1 - Sum2| = " + Math.abs(sum));
        break;

    }
    newArray3 = [];
}




