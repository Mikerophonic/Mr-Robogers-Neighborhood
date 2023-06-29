Tests

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