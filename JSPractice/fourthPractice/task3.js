function show_matrix(n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`${n}`.repeat(n));
        }   
        console.log('\n'); 
    }
}

show_matrix(3);

console.log('\n'); 

show_matrix(7);