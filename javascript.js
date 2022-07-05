function add(x, y) {
    return x + y;
};

function subtract (x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide (x, y) {
    return x / y;
};

function operate(choice, x, y) {

    if (choice == "+") {
        return add(x, y);
    } else if (choice == "-") {
       return subtract(x, y);
    } else if (choice == "*" || "x") {
        return multiply(x, y)
    } else if (choice == "/") {
        return divide(x, y)
    }

};
console.log(operate("*", 7, 3))