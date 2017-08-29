//Global Variables
var readOut = document.querySelector('#readout')
var digits = document.querySelectorAll('.digit')
var operators = document.querySelectorAll('.operator')

//Functions



//Event Listeners

//forEach(function(pass in a button))
   
digits.forEach(function(btn){
     //add an Event Listener for clicks
    btn.addEventListener('click', function(){
        //"this" is the button being clicked...
        //concatenate the text
        readout.innerText += this.innerText
    })
})
operators.forEach(function(btn){
    //add an Event Listener for clicks
    btn.addEventListener('click', function(){
        //concatenate the text
        readout.innerText += this.innerText
    })
})
