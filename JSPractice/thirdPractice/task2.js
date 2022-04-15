function search(array1, array2) {

    let duplicates = new Set();

    for (let value of array1) {
        if (second_array.includes(value)) {
            duplicates.add(value);
        }
    }

    for (let value of second_array) {
        if (first_array.includes(value)) {
            duplicates.add(value);
        }
    }

    return [...duplicates];
}

console.log(
    search(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']
    )
);

console.log(
    search( ['R', 'u', 's', 's', 'i', 'a'],['R', 'u', 't']
    )
);