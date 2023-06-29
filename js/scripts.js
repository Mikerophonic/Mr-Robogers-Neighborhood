function beepBoop(number) {
    if (number.trim().length === 0) {
        return "Please enter a number."
    }
    if (isNaN(Number(number)) === true) {
        return "Please enter a number."
    }
}