let priceArr = [8.45, 9.80, 10.46,
    10.90, 15.60, 16,
    15, 20, 22.50];

function checkPrice(count, group, day) {
    if (group == "Students") {
        if (day == "Friday") {
            fullPrice = count * priceArr[0];
        }
        else if (day == "Saturday") {
            fullPrice = count * priceArr[1];
        }
        else if (day == "Sunday") {
            fullPrice = count * priceArr[2];
        }
        if (count >= 30) {
            price = fullPrice * 0.85;
        }
        else {
            price = fullprice;
        }
    }

    if (group == "Corporate") {

        if (day == "Friday") {
            if (count >= 100) {
                fullPrice = count * priceArr[3];
                price = fullPrice - 10 * priceArr[3];
            }
            fullPrice = count * priceArr[3];
        }
        else if (day == "Saturday") {
            if (count >= 100) {
                fullPrice = count * priceArr[4];
                price = fullPrice - 10 * priceArr[4];
            }
            fullPrice = count * priceArr[4];
        }
        else if (day == "Sunday") {
            if (count >= 100) {
                fullPrice = count * priceArr[5];
                price = fullPrice - 10 * priceArr[5];
            }
            fullPrice = count * priceArr[5];
        }
    }

    if (group == "Regular") {
        if (day == "Friday") {
            fullPrice = count * priceArr[6];
        }
        else if (day == "Saturday") {
            fullPrice = count * priceArr[7];
        }
        else if (day == "Sunday") {
            fullPrice = count * priceArr[8];
        }
        if (count >= 10 && count <= 20) {
            price = fullPrice * 0.95;
        }
        else {
            price = fullprice;
        }
    }
    console.log("Total price :" + price);
}
checkPrice(30, "Students","Sunday");
