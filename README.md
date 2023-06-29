Tests

Describe: beepBoop()

Test: "It should ask for a number if an empty string is inputted."
Code: beepBoop("");
Expected Output: "Please enter a number."

Test: "It should ask for a number if something other than a number is inputted."
Code: beepBoop("Bop");
Expected Output: "Please enter a number."

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]