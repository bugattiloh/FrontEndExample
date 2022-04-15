function check_matrix(matrix) {

    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < matrix.length; i++) {
        let row_sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            row_sum += matrix[i][j];
        }
        if (row_sum != sum) {
            return false;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let column_sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            column_sum += matrix[j][i];
        }
        if (column_sum != sum) {
            return false;
        }
    }

    return true;
}

console.log(
    check_matrix(
        [
            [4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]
        ]
    )
);
console.log(
    check_matrix(
        [
            [11, 32, 45],
            [21, 0, 1],
            [21, 1, 1]
        ]
    )
);
console.log(
    check_matrix(
        [
            [1, 0, 0],
            [0, 0, 1],
            [0, 1, 0]
        ]
    )
);