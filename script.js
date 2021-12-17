// main method that is called pressing the "Compute Interest" button
function compute() {
    var principal = parseFloat(document.getElementById("principal").value);

    // warns the user if not a positive number was provided
    if (principal < 1 || isNaN(principal)) {
        var amountField = document.getElementById("principal");
        alert("Enter a positive number");
        // little delay needs to added for focus to work
        // works on chrome & firefox, but not on opera browser
        setTimeout(function() {
            amountField.focus();
        }, 1);
        return;
    }

    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    // calculate the interest
    var interest = calculateInterest(principal, years, rate);

    // after the intereset is calculated update the DOM
    updateResult(principal, interest, years, rate);
}

// separate function for updating dom
function updateResult(principal, interest, years, rate) {
    var year = new Date().getFullYear() + parseInt(years) - 1;
    document.getElementById("result").innerHTML = `<br>If you deposit <mark>${principal}</mark>,<br>`
        + `at an interest rate of <mark>${rate}%</mark><br>` 
        + `You will receive an amount of <mark>${interest},</mark><br>` 
        + `in the year <mark>${year}</mark><br>`;
}

// separate function for interest calculation
function calculateInterest(principal, years, rate) {
    return principal * years * rate / 100;
}

// used for updating the current value of selected rate
function updateRate(element) {
    document.getElementById("rate_val").innerText = `${element.value}%`;
}
