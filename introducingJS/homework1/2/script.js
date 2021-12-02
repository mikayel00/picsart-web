let num = +prompt("Enter number");
let value = num;
let char;
let temp;
do {
    char = +prompt(`Your value: ${value} What do you want to do? \n1) +\n2) -\n3) *\n4) /\nEnter NUMBER of action`);
    if (char == 1) {
        temp = +prompt("Enter value to plus");
        value += temp;
        alert(value);
    }
    else if (char == 2) {
        temp = +prompt("Enter value to minus");
        value -= temp;
        alert(value);
    }
    else if (char == 3) {
        temp = +prompt("Enter value to multiply");
        value *= temp;
        alert(value);
    }
    else if (char == 4) {
        temp = +prompt("Enter value to divide");
        value /= temp;
        alert(value);
    }
    else {
        alert("Enter numbers of action 1-4\n\n1) +\n2) -\n3) *\n4) /")
    }
} while (char != 0);
