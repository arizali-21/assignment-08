//! question # 1
// Addition

var num1 = 3;
var num2 = 5;
var total = num1 + num2;
var result = "The sum of " + num1 + " and " + num2 + " is " + total;
document.write("<h2>Question 01</h2>");
document.write(result + "<br>" );

// question # 2
// Subtraction

var num1 = 3;
var num2 = 5;
var total = num1 - num2;
var result = "The sub of " + num1 + " and " + num2 + " is " + ":" + total;
document.write("<h2>Question 02</h2>");
document.write(result + "<br>" );

// Multiplication

var num1 = 3;
var num2 = 5;
var total = num1 * num2;
var result = "The multiply of " + num1 + " and " + num2 + " is " + ":" + total;
document.write(result + "<br>" );

// Division

var num1 = 3;
var num2 = 5;
var total = num1 / num2;
var result = "The divide of " + num1 + " and " + num2 + " is " + ":" + total;
document.write(result + "<br>" );

// Moduleus

var modulus = num1 % num2;
var modulusResult = "The modulus of " + num1 + " and " + num2 + " is " + modulus;
document.write( modulusResult + "<br>");

//! question # 3

// a. Declare a variable.
var myVariable;

// b. Show the value of the variable in your browser.
document.write("<h2>Question 03</h2>");
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the initial value of the variable in your browser.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable after increment.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable after addition.
document.write("Value after addition is: " + myVariable);

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable after decrement.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Calculate the remainder after dividing the variable's value by 3.
var remainder = myVariable % 3;

// l. Show the remainder.
document.write("The remainder is: " + remainder + "<br>");



//! question # 4

// Store the ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Display the total cost
document.write("<h2>Question 04</h2>");
document.write("The cost of buying 5 movie tickets is " + totalCost + " PKR." + "<br>");


//! question # 6

// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output "NNoC is NNoF".
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write("<h2>Question 06</h2>");
document.write("<h3>The Temperature Converter: </h3>");
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Store a Fahrenheit temperature into a variable.
var fahrenheitTemperature2 = 77;

// d. Convert it to Celsius & output "NNoF is NNoC".
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C" + "<br>");


//! question # 7

// Define the variables
var priceItem1 = 650;         // Price of item 1
var priceItem2 = 100;         // Price of item 2
var quantityItem1 = 3;       // Ordered quantity of item 1
var quantityItem2 = 7;       // Ordered quantity of item 2
var shippingCharges = 100;    // Shipping charges

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Question 07</h2>");
document.write("<h3>Shopping Cart Receipt</h3>");
document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<p><strong>Total Cost: " + totalCost + " PKR</strong></p>" + "<br>");


//! question # 8

// Define the total marks and marks obtained by the student
var totalMarks = 980;  // Replace with the total marks for the exam
var marksObtained = 804;  // Replace with the actual marks obtained by the student

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>Question 08</h2>");
document.write("<h3>Student's Exam Result</h3>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>" + "<br>");


//! question # 9

// Define the amounts in US Dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Define the exchange rates

// 1 US Dollar to Pakistani Rupee
var exchangeRateUSD = 104.80; 

// 1 Saudi Riyal to Pakistani Rupee
var exchangeRateSAR = 28;      

// Calculate the total in Pakistani Rupees
var totalPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

// Display the result in the browser
document.write("<h2>Question 09</h2>");
document.write("<h3>Currency Conversion</h3>");
document.write("<p>Total US Dollars: $" + usDollars + "</p>");
document.write("<p>Total Saudi Riyals: " + saudiRiyals + " SAR</p>");
document.write("<p>Total in Pakistani Rupees: " + totalPKR.toFixed(2) + " PKR</p>");

//! question # 10

// Initialize a variable with some number
var initialNumber = 20; // Replace with your desired initial number

// Perform the arithmetic operations in a single expression
var result = ((initialNumber + 5) * 10) / 2;

// Display the result
document.write("<h2>Question 10</h2>");
document.write("<h3>Simlify</h3>");
document.write("The result is: " + result + "<br>");
// console.log("The result is: " + result);

//! question # 11

var current = 2023;
var birth = 2001;

var age = current - birth

document.write("<h2>Question 11</h2>");
document.write("<h3>The Age Calculator:</h3>");
document.write("Current year is: " + current + "<br>");
document.write("Birth year is: " + birth + "<br>");
document.write("Your age is: " + age + "<br>");


//! question # 12


var pi = 3.142;
var radius = 20;
var circumference = 2 * pi * radius;

var area = 3.142 * (radius * radius);

document.write("<h2>Question 12</h2>");
document.write("<h3>The Geometrizer:</h3>");
document.write("Radius of the circle is = " + radius + "<br>");
document.write("The cercumference is = " + circumference + "<br>");
document.write("The area is = " + area + "<br>");

//! question # 12

var snack = "chips";
var currentage = 22;
var maximumage = 70;
var amountperday = 2;

var total = (maximumage - currentage) * 365 * 2;

document.write("<h2>Question 13</h2>");
document.write("<h3>The Lifetime Supply Calculator:</h3>");
document.write("Favourite snack = " + snack + "<br>");
document.write("Current Age = " + currentage + "<br>");
document.write("Estimate maximum Age  = " + amountperday + "<br>");
document.write("You will need" + total + "chips to last you until the rip old age of " + maximumage);




