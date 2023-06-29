# Mr Robogers' Neighborhood

#### By _**Michael G Connelly**_

#### simple web application

## Technologies Used

* HTML
* CSS
* Javascript

## Description

This was created as my third independent project for Epicodus, course section: Arrays and Looping. The goal was to Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

*For numbers that contain a 1, all digits are replaced with "Beep!"
*For numbers that contain a 2, all digits are replaced with "Boop!"
*For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

Additionally, I had to:

*Solve this prompt using at least one loop, at least one array, and branching logic.
*Design the application so that a user is able to enter a new number and see new results over and over again.
*Remember to return a list of values from 0 to the user's inputter number. This means printing each element in the list to the webpage. 
*Write tests for your application's business logic. See the section below that covers testing.


## Setup/Installation Requirements

* Clone this repository to your local machine: $ git clone https://github.com/Mikerophonic/Mr-Robogers-Neighborhood.git
* Open index.html in a web browser.

[Github Pages - Programming Language Suggester](https://mikerophonic.github.io/Mr-Robogers-Neighborhood)

## Known Bugs

* No known bugs.




## Tests

Describe: beepBoop()

Test: "It should ask for a number if an empty string is inputted."
Code: beepBoop("");
Expected Output: "Please enter a number."

Test: "It should ask for a number if something other than a number is inputted."
Code: beepBoop("Bop");
Expected Output: "Please enter a number."

Test: "It should ask for a positive number if a negative number is inputted."
Code: beepBoop("-9");
Expected Output: "Please enter a positive number."

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop("0");
Expected Output: ["0"]

Test: "It should replace numbers that contain a '1' with 'Beep!'"
Code: beepBoop("1")
Expected Output: ["0","Beep!"]

Test: "It should replace numbers that contain a '2' with 'Boop!'"
Code: beepBoop("2")
Expected Output: ["0", "Beep!", "Boop!"]

Test: "It should replace numbers that contain a '3' with 'Won't you be my neighbor?'"
Code: beepBoop("3")
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?"]

## License


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Copyright (c) _2023_ _Michael G Connelly_