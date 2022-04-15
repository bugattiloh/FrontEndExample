function lockedProfile() {
    let buttons = document.getElementsByTagName('button')


    buttons[0].addEventListener('click', work1)
    buttons[1].addEventListener('click', work2)
    buttons[2].addEventListener('click', work3)

}

function work1() {
    let locker = document.getElementsByName("user1Locked")[0];
    let info = document.getElementById("user1HiddenFields")
    console.log(locker.checked);
    if (!locker.checked) {
        if (info.style.display === "none") {
            info.style.display = 'block';
            document.getElementsByTagName("button")[0].innerText = "Hide it";
        } else {
            info.style.display = 'none';
            document.getElementsByTagName("button")[0].innerText = "Show more";
        }
    }
}

function work2() {
    let locker = document.getElementsByName("user2Locked")[0];
    let info = document.getElementById("user2HiddenFields")
    console.log(locker.checked);
    if (!locker.checked) {
        if (info.style.display === "none") {
            info.style.display = 'block';
            document.getElementsByTagName("button")[1].innerText = "Hide it";
        } else {
            info.style.display = 'none';
            document.getElementsByTagName("button")[1].innerText = "Show more";
        }


    }
}

function work3() {
    let locker = document.getElementsByName("user3Locked")[0];
    let info = document.getElementById("user3HiddenFields")
    console.log(locker.checked);
    if (!locker.checked) {
        if (info.style.display === "none") {
            info.style.display = 'block';
            document.getElementsByTagName("button")[2].innerText = "Hide it";
        } else {
            info.style.display = 'none';
            document.getElementsByTagName("button")[2].innerText = "Show more";
        }


    }
}




