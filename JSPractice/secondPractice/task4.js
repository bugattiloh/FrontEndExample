function Calculator(num1, sign, num2) {
    if (sign == "+") {
        console.log(num1 + num2);
    }
    else if (sign == "-") {
        console.log(num1 - num2);
    }
    else if (sign == "/") {
        console.log((num1 / num2).toFixed(2));
    }
    else if (sign == "*") {
        console.log((num1 * num2).toFixed(2));
    }
    else {
        console.log("Try again,pls");
    }
}
Calculator(7,"*",4.6);