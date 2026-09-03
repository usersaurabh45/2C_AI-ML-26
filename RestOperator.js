function sum(first, last, ...values) {
    let total = 0;

    for (let n of values) {
        total = total + n;
    }

    console.log(total);
    console.log(first);
    console.log(last);
}

sum("Saurabh", "Pal", 10, 20, 30, 40);