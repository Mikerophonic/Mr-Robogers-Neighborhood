function beepBoop(input) {
    if (input.trim().length === 0) {
        return "Please enter a number."
    }
    
    const number = Number(input);

    if (isNaN(number) === true) {
        return "Please enter a number."
    }

    if (number < 0) {
        return "Please enter a positive number."
    }


    let countArray = [];

    for (let i = 0; i <= number; i++) {

    }


}