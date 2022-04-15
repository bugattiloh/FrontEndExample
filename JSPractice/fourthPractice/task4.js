function percent(n) {
    str = "[";
    for (let i = 0; i < 10; i++) {
        if (i < n / 10) {
            str += "%";
        } else {
            str += ".";
        }
    }
    str += "]";
    return str;
}

function progress_bar(n) {
    console.log(n + "% " + percent(n));
    if (n < 100) {
        console.log("Still loading...");
    } else {
        console.log("Complete!");
    }
}

progress_bar(30);