function rounding(num,roundingNumber){

    if (roundingNumber>15){
        roundingNumber=15;
    }
    num= parseFloat(num.toFixed(roundingNumber));
    console.log(num);
}
rounding(3.14155765,7);
