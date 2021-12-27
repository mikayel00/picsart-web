function inputReverse(num) {
    const arr = [];
    let concat = "";
    for (let i = 0; num; i++) {
        let temp = num % 10;
        arr[i] = temp;
        num = (num - temp) / 10;
    }
    for (let i = 0; i < arr.length; i++) {
        concat += arr[i];
    }
    totalValue = concat;
    return concat;
};

function inputSubmit(num) {
    const number = document.getElementById("number");
    document.getElementById("result").innerHTML = inputReverse(number.value);
}
