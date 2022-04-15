function sum(num1,num2){
    if (num1<num2){
        return num1;
    }else{
        return num2;
    }
}

res = sum(sum(2,5),3)
console.log(res);

res = sum(sum(600,342),123)
console.log(res);
