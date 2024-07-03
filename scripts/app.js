// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


// pretty sure there is a method that checks the date
// yep .toDateString() is what I want to use
// it returns a string representing the date
// we just need to compare it to the input
// if the input is not the same as the method then its false
// if they are the same then its true
function isToday(date){
    return new Date().toDateString() == date.toDateString()
}