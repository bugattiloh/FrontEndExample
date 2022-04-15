function new_array(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = ~~array[i]; 
    }

    let source_array_sum = 0;
    let result_arrah_sum = 0;

    for (let i = 0; i < array.length; i++) {
        source_array_sum += array[i];

        if (array[i] % 2 === 0) {
            array[i] += i;
        }
        else {
            array[i] -= i;
        }

        result_arrah_sum += array[i];
    }

    return { array, source_array_sum, result_arrah_sum };
}

function new_array_show(array) {
    let result = new_array(array);

    console.log(`${result.array}\n${result.src_sum}\n${result.dst_sum}`);
}

new_array_show([5, 15, 23, 56, 35])
new_array_show([-5, 11, 3, 0, 2])