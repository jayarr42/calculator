let readout = document.createElement("p");
readout.innerHTML = "display";
readout.id = "readout";
document.getElementById("container").appendChild(readout);

let layout = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "clear", 0, "=", "/"]
function createDisplay() {

    // const display = document.createElement('div');
    // display.innerHTML = "123456";
    // display.className = "display";
    // body.getElementById("display").appendChild(display);

}
function createButtons() {
    for (let i = 0; i < 16; i++) {
        const buttons = document.createElement('button');
        buttons.innerHTML = layout[i];
        buttons.id = "button" + [i]; 
        buttons.className = "buttons"
        document.getElementById('container').appendChild(buttons);
    }
    
}


createButtons();

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