//Global Variables
    //Readout Area
var readOut = document.querySelector('#readout')
    //Digit Buttons
var digits = document.querySelectorAll('.digit')
    //Operator Buttons
var operators = document.querySelectorAll('.operator')
    //Equals Button
var equalsBtn = document.querySelector('#equals')
    //Clear Button
var clearBtn = document.querySelector('#clear')
    //Operator Storage
var opStorage = ''
    //Number Storage
var numStorage= []

//Functions

    //Calculation Function
function evaluate(operation, firstNumber, secondNumber){
    switch(operation) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
    }

}



//Event Listeners

//forEach(function(pass in a button))
   //Digit Actions
digits.forEach(function(btn){
     //add an Event Listener for clicks
    btn.addEventListener('click', function(){
        //"this" is the button being clicked...
        //concatenate the text
        readout.innerText += this.innerText
    })
})

    //Operator Actions
operators.forEach(function(btn){
    //add an Event Listener for clicks
    btn.addEventListener('click', function(){
        //concatenate the text
        readout.innerText += this.innerText
        opStorage = this.innerText
    })
})
    //Equals Button Action
equalsBtn.addEventListener('click', function(){
    numStorage = readout.innerText.split(opStorage)
    readout.innerText = evaluate(opStorage,parseInt(numStorage[0]),parseInt(numStorage[1]))
    numStorage = []
})

    //Clear Button Action
clearBtn.addEventListener('click', function(){
    numStorage = []
    readout.innerText = ''
})