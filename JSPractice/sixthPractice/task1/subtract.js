function subtract() {
    num1 = parseFloat(document.getElementById("firstNumber").value);
    num2 = parseFloat(document.getElementById("secondNumber").value);
    res = num2 - num1;
    document.getElementById("result").innerHTML=res;
    
   
}