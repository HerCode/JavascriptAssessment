var theNumber = 1;

var michelangelo = function(value){
    value = (value * 2);
    return value;
};

var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
    console.log(anotherValue);
};

var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
};

var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
};

//In your email, tell me what the answer to this expression would be:
var theNumber = 1;
// Here the value of the named variable is declared to be 1.
michelangelo(theNumber) + leonardo(theNumber);
// Here you subsitute the variable value of theNumber in to the equation and solve:
theNumber = 1 + 1;
console.log(theNumber);

theNumber = theNumber * 2;
theNumber = 2 * 2;
// Here we carry the answer to the previous equation forward and substitute that value into this equation, then solve: 2 * 2 = 4
console.log(theNumber);
// Here we log the new value of the variable "theNumber" to the console, to verify the code is working and is showing the accurate
//answer to the expression.

//In your email, tell me what the answer to this expression would be:
var theNumber = 1;
// Here the value of the named variable is declared to be 1.
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber));
theNumber = ((1 * 2) - (3 * 2) + 1);
theNumber = 2 - (6 + 1);
theNumber = 7 -2;
// Here you subsitute the variable value of theNumber in to the equation and solve:
// ((1 * 2) - (3 * 2) + 1)
// 2 - (6 + 1)
// 2 - 7
// 5
console.log(theNumber);
// Here we log the new value of the variable "theNumber" to the console, to verify the code is working and is showing the accurate
//answer to the expression.
