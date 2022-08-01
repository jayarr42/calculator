let x;
let y;
let operator;
let result;

let math = {
    x: "",
    y: "",
    operator: "",
    firstNumArray: [],
    secondNumArray: [],
};


const bottomReadout = document.getElementById('bottomReadout');
const topReadout = document.getElementById('topReadout');

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

/*-------Sets the value of the operator-------*/
operatorButtons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        math.operator = btn.value    
        updateDisplay();
        console.log(math)
        
        if (math.y) {
            math = {
                x: result,
                y: "",
                operator: btn.value,
                firstNumArray: [],
                secondNumArray: [],
            };
            console.log(result);
            bottomReadout.textContent = result;
            updateDisplay();
            return result;
        }
    })
});
/*-------Sets the value of the first and second number in relation to operator-------*/
numberButtons.forEach((button) => {
    button.addEventListener('click', function(ev) {
        if (math.operator) {
            math.secondNumArray.push(button.value);
            y = math.secondNumArray.join('');
            math.y = parseFloat(y);

            // math.y += button.value;
        } else {
            math.firstNumArray.push(button.value);
            x = math.firstNumArray.join('');
            math.x = parseFloat(x);
            // math.x += button.value;
        }
        console.log(math)
        updateDisplay();

/*-------sets solution to previous problem as new first input-------*/
        if (math.operator) {
            result = (operation(math.x, math.operator, math.y));
        }
    });
});


/*-------SHOULD solve the function-------*/
equalButton.addEventListener('click', function(e){
        if (result)
            math = {
                x: result,
                y: "",
                operator: "",
                firstNumArray: [],
                secondNumArray: [],
            };
        bottomReadout.textContent = result;
})

/*-------Clears the math object-------*/
clearButton.addEventListener('click', function (e) {
    math = {
        x: "",
        y: "",
        operator: "",
        firstNumArray: [],
        secondNumArray: [],
    };
    bottomReadout.textContent = '';
    updateDisplay();
    console.log(math);
})

deleteButton.addEventListener('click', function(e) {
    if (math.x && math.operator && math.y) {
        math.secondNumArray.pop();
        y = math.secondNumArray.join('');
        if (y == '') {
            math.y = '';
        } else {
            math.y = parseFloat(y);
        }
        console.log(math.y)
        updateDisplay();
    } else if (math.x && math.operator) {
        math.operator = ""
        updateDisplay();
    } else if (math.x) {
        math.firstNumArray.pop();
        x = math.firstNumArray.join('');
        console.log(x);
        if (x == '') {
            math.x = '';
        } else {
            math.x = parseFloat(x);
        }

        console.log(math);
        updateDisplay();
    } 
})

function updateDisplay() {
    topReadout.textContent = `${math.x} ${math.operator} ${math.y}`;
}


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

function operation(x, operator, y) {

    if (operator == "+") {
        return add(x, y);
    } else if (operator == "-") {
       return subtract(x, y);
    } else if (operator == "*") {
        return multiply(x, y)
    } else if (operator == "/") {
        return divide(x, y)
    }

};




// Your next goal is to utilize operation function. So on "=" press check if there is enough data to perform a calculation, if so do it and update display. The "trick" is that you should store result in math.x and probably reset math.y and math.operator to initial "" state.