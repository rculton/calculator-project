//Global Variables
    //Readout Area
var readOut = document.querySelector('#readout')
    //Digit Buttons
var digits = document.querySelectorAll('.digit')
    //Operator Buttons
var operators = document.querySelectorAll('.operator')

//Functions



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
    })
})
