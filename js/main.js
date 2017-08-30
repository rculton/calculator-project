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
var opStorage = []
    //Number Storage
var numStorage= []
var evalStorage= 0
    //Readout Storage
var readoutStorage= ''

    //Operation Finished boolean

var finishedOp = false

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
        if (finishedOp)
            {
                readout.innerText = ''
            }
        readout.innerText += this.innerText
        finishedOp = false
    })
})

    //Operator Actions
operators.forEach(function(btn){
    //add an Event Listener for clicks
    btn.addEventListener('click', function(){
        //de-concatenate the text for a number
        numStorage.push(Number(readout.innerText.replace(readoutStorage, '')))
        console.log(numStorage)
        //concatenate the text for an output
        readout.innerText += this.innerText
        readoutStorage = readout.innerText
        opStorage.push(this.innerText)
        console.log(opStorage)
        finishedOp = false
    })
})
    //Equals Button Action
equalsBtn.addEventListener('click', function(){
    var opStorageCount = opStorage.length
    numStorage.push(parseInt(readout.innerText.replace(readoutStorage, '')))
    for (var i = 0; i<opStorageCount; i++){
        //use opStorage[0] on numStorage[0] and numStorage[1]
        evalStorage = evaluate(opStorage[0],numStorage[0],numStorage[1])

        numStorage.splice(0,1)
        numStorage[0] = evalStorage
        console.log(numStorage)

        opStorage.splice(0,1)
        console.log(opStorage)

     readout.innerText = numStorage[0]
  

    }
    numStorage = []
    finishedOp = true
})

    //Clear Button Action
clearBtn.addEventListener('click', function(){
    numStorage = []
    opStorage = []
    readout.innerText = ''
    readoutStorage = ''
    finishedOp = true
})