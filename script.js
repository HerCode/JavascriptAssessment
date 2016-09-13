var theNumber = 1;

var michelangelo = function(value) {
    value = (value * 2);
    //  value = 2 (2 * 1)

    return value; // 2
};
var value = 4;
var anotherValue = 2;
var donatello = function(value, anotherValue) {
    //  function (4, 2)
    value = anotherValue + value;
    // value = 6 (2 + 4)
    anotherValue = value * anotherValue;
    //  anotherValue = 6 * 2 = 12
    return anotherValue; // 12
};

var leonardo = function(value) {
    // function(1)
    var anotherValue = value;
    //  anotherValue is a Local Variable(theNumber) = 1
    value *= 4;
    // value = 4 (1 * 4)
    theNumber = value / 2;
    // Changing Global Variable (theNumber) = 2 (4/2)
    return (value + anotherValue); // return 4 + 1 = 5
};

var raphael = function(value, anotherValue, yetAnotherValue) {
    // function(3, 2, 4)
    value = value * anotherValue + yetAnotherValue;
    // value = 3 * 2 + 4 = 10
    return yetAnotherValue; // 4
};

//In your email, tell me what the answer to this expression would be:

// Here the value of the named variable is declared to be 1.
alert(michelangelo(theNumber) + leonardo(theNumber));
// michelangelo = 2
// leonardo = 5
// 2 + 5 = 7


theNumber = theNumber * 2;
// theNumber = 4 (2 * 2)


//In your email, tell me what the answer to this expression would be:
alert((donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));
// donatello = 4
// raphael = 12
// 12 - 4 = 8
