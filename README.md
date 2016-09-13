# Javascript Assessment

In this assessment, you will be working with functions and how the are processed in a chronological fashion. Navigate to the files below. There you will find a series of statements. Your task is, at the two points indicated, tell us what the expressions would evaluate to (had we assigned it or logged it for example).

PLEASE try to work this out on paper BEFORE bringing the code into an editor yourself. We want you working through the challenge independently, so that you can get an honest assessment of your skills. Once you have worked out the values for each step, include the code and reasoning behind your answers. <http://goo.gl/Ay9sR7>

Javascript Assessment Code Here:

var theNumber = 1;

var michelangelo = function(value){ value = (value * 2); return value; }

var donatello = function(value, anotherValue){ value = anotherValue + value; anotherValue = value * anotherValue; return anotherValue; }

var leonardo = function(value){ var anotherValue = value; value *= 4; theNumber = value / 2; return (value + anotherValue); }

var raphael = function(value, anotherValue, yetAnotherValue){ value = value * anotherValue + yetAnotherValue; return yetAnotherValue; }

//In your email, tell me what the answer to this expression would be: michelangelo(theNumber) + leonardo(theNumber);

theNumber = theNumber * 2;

//In your email, tell me what the answer to this expression would be: (donatello(theNumber, 2)) - (raphael(3, 2, theNumber));
