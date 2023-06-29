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
    
    let countArray = []
    
    for (let i = 0; i <= number; i++) {
        countArray.push(i)
    }
    
    const stringArray = countArray.map(String);

    let newArray = [];

    stringArray.forEach(function(num) {
        if (num.includes("3")) {
            num = "Won't you be my neighbor?"
        }
        else if (num.includes("2")) {
            num = "Boop!"
        }
        else if (num.includes("1")) {
            num = "Beep!"
        }
        newArray.push(num)
    })
    
    let result = newArray.join("<br>");
    return result;
}

window.onload = function() {
    
    const button = document.getElementById("goBtn");
    const resetBtn = document.getElementById("resetBtn");
    const resultDiv = document.getElementById("result");
    const img = document.querySelector("img");
    button.onclick = function() {
        resultDiv.innerHTML = beepBoop(document.querySelector("input").value);
        img.removeAttribute("class")
    }
    resetBtn.onclick = function() {
        window.location.reload();
    }
}
