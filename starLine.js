function starLine (numberOfStars) {
    
    // using .repeat()
    //console.log('*'.repeat(numberOfStars));
    
    // using 'while'
    // let counter = 0;
    // while (counter < numberOfStars) {
    //     process.stdout.write('*'); 
    //     counter++;
    // }
    
    // using for
    for (let i = 0; i < numberOfStars; i++) {
        process.stdout.write('*');
    }
    
}

starLine(5);
// output: *****
