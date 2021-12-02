let name = prompt("Enter your name");
let lastName = prompt("Enter your last name");

let age = prompt(`Hello dear ${name} ${lastName} .Please enter your age`);

if (age <= 18) {
    alert(`Sorry dear ${name}.Please come back when your age will be 21+`);
}
else if (age > 18 && age < 21) {
    alert(`You are so close,but please come back when you will be 21+`);
}
else {
    alert(`Welcome and nice to meet you ${name}!`);
}