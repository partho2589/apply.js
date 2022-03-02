var time = '10:15';
var bookPrice = 50;
var isWhiteColor =false;

// Array
var foodPrice = [50, 53, 90, 45, 25, 36, 90];
var numberCound = foodPrice.length;
// console.log(numberCound);
var foureNumber = (90);
 var pathao=foodPrice.push(100, 30,40);
 var add = foodPrice.pop(40);
//  console.log(add);
// console.log(foureNumber);
// console.log(pathao);

//conditions 
var bookPrice = 350;
if( bookPrice < 300){
    // console.log('I will by this book')
}
else{
    // console.log('mama kicu discound dan na');
}

//
var i=0;
while ( i <=15){
    // console.log('taka de amare',);
    // console.log(i);
    i++;
}
for(var i=0; i<=20; i++){
    // console.log(i);
}
//function
// function isMoonup(){
//     return true;
// }
// var moonstatar= isMoonup();
// console.log(moonstatar);

function isMoonup (time){
    if ( time >=19 && time <= 5){
        return true;
    }
    return false;
}
var moonstatar = isMoonup(21);
console.log(moonstatar);

// let and const

//valus of the variable will could change
let phonPrice = 15000;
phonPrice = 13000;
phonPrice = 12000;
//valus of the variable will could not change
const myName = 'Partho malo';
console.log(myName);


