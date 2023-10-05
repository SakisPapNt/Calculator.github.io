function addition(a, b){
    return a+b;
}

function substraction(a, b){
    return a-b;
}

function Multiplication(a,b){
    return a*b;
}

function Divide(a,b){
    if (b===0){
        return "Ans"
    }
    return a/b;
}

let numb1=0;
let operator='';
let num2=0;

function operate(a,b,c){
    switch(b){
        case '+':
            return addition(a,c)
        case '-':
            return substraction(a,c)
        case '*':
            return Multiplication(a,c)
        case '/':
            return Divide(a,c)
    }
}

function clearDisplay(){
    document.getElementById('display').textContent='0';
}

function addToDisplay(char) {
    
    // Get the current display value
    let display = document.getElementById("display").textContent;
    if (display==='0'){
        display=char;
    }else{
         // Update the display value by appending the clicked character
    display += char;
    }
   
    // Update the display on the screen
    document.getElementById("display").textContent = display;

}

function equality(){
    let display = document.getElementById("display").textContent;
    let result=eval(display);
    document.getElementById("display").textContent=result;

}

// Function to clear the last character or number from the display
function clearLast() {
    // Get the current display value
    let display = document.getElementById("display").textContent;

    // Check if the display value is not empty
    if (display !== '') {
        // Remove the last character from the display value
        display = display.slice(0, -1);

        // If display becomes empty, set it back to '0'
        if (display === '') {
            display = '0';
        }

        // Update the display on the screen
        document.getElementById("display").textContent = display;
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/=.]/.test(key)) {
        // Allow numbers, operators, and equals sign
        addToDisplay(key);
    }if(key==='Enter'){
        equality();
    } else if (key === 'Backspace') {
        // Handle Backspace key for clearing
        clearLast();
    }
});

// Set focus on the document so it captures keyboard input
document.focus();