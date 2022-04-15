function toPascalCase(input) {
    let str = "";
    for (let i = 0; i < input.length; i++) {
        if (i === 0 || input[i - 1] === " ") {
            str += input[i].toUpperCase();
        }
        else {
            str += input[i].toLowerCase();
        }
    }
    str = str.replace(' ', '');
    return str;
}

function toCamelCase(input) {
    let str = toPascalCase(input)
    str = str[0].toLowerCase() + str.substring(1);
    return str;
}

function solve() {
    let text = document.getElementById("text").value;
    let convention = document.getElementById("naming-convention").value;
    if (convention === "Camel Case") {
        let res = toCamelCase(text);
        document.getElementById("result").innerText = res;
    } else if (convention === "Pascal Case") {
        let res = toPascalCase(text);
        document.getElementById("result").innerText = res;
    }
    else
    {
        document.getElementById("result").innerText="Error!"
    }
}