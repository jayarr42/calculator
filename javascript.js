let readout = document.createElement("p"); //create display
readout.id = "readout";
document.getElementById("container").appendChild(readout);

let layout = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "clear", 0, "=", "/"] //create button text

function createButtons() {
    for (let i = 0; i < 16; i++) {
        const buttons = document.createElement('button'); // create buttons
        buttons.innerHTML = layout[i];
        buttons.id = "button" + [i]; 
        buttons.className = "buttons"
        buttons.addEventListener('click', display); //create first input
     
        function display() {
            readout.textContent = layout[i]
        }
        document.getElementById('container').appendChild(buttons);
    }
    
}
createButtons();
// buttons.addEventListener('click', populate) 
    
// function populate();
// if (target.className === "buttons") {
//         display = e.target.textContent;
//     }



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