let storedData;
let readout = document.createElement("p"); //create display
readout.textContent = storedData;
readout.id = "readout";
document.getElementById("container").appendChild(readout);

let layout = ["clear", 1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", ".", 0, "=", "/"] //create button text



function makeButtons() {
    function createNumberButtons() {
        for (let i = 0; i < 17; i++) {
            const numberButtons = document.createElement('button'); // create buttons
            numberButtons.textContent = layout[i];
            numberButtons.id = layout[i] + " button"; 
            numberButtons.className = "numberButtons buttons"
            numberButtons.addEventListener('click', display); //create first input
        
        function display() {
                readout.textContent = layout[i]
                storedData = layout[i];
            }

            if (storedData) {       //isNaN to check if it's a number
                console.log("hello")
            }
            document.getElementById('container').appendChild(numberButtons);

        }
    }
    createNumberButtons();
}
makeButtons();
// createNumberButtons();
// createOperationButtons();

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


//tried and failed(?)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] //create number button text
// const operations = ["Clear", "+", "-", "*", "/", "=", "."]
// function createOperationButtons() {
//     for (let i = 0; i < 7; i++) {
//         const operationButtons = document.createElement('button'); // create buttons
//         operationButtons.innerHTML = operations[i];
//         operationButtons.id = "operationButton" + [i]; 
//         operationButtons.className = "operationButtons buttons"
//         operationButtons.addEventListener('click', display); //create first input
    
//     function display() {
//             readout.textContent = operations[i]
//             storedData = operations[i];
//         }

//         if (storedData) {       //isNaN to check if it's a number
//             console.log("hello")
//         }
//         document.getElementById('container').appendChild(operationButtons);

//     }
// }