function divider(num) {
    if (num % 7 == 0) {
        console.log("Число делится на 7");

    }
    else if (num % 2 == 0) {
        if (num % 3 == 0) {
            if (num % 5 == 0) {
                console.log("Число делится на 10");
            }
            else {
                console.log("Число делится на 6");
            }
        }
        else {
            console.log("Число делится на 2");
        }

    }
    else {
        console.log("Не делится");
    }
}
divider(36);