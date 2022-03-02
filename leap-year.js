function leapyear(number){
    if( number %4 == 0){
        return true;
    }
    return false;
}
const yearName = 2100;
const years = leapyear(yearName);
console.log(years);
