// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } 
        return false;
    
}
// take input
const year = 2100;

 const isLeapYear = checkLeapYear(year);
 console.log(isLeapYear);