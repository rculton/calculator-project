//Global Variables
var readOut = document.querySelector('#readout')
var digits = document.querySelectorAll('.digit')

//Functions



//Event Listeners

//forEach(function(pass in a button))
   
digits.forEach(function(btn){
     //add an Event Listener for clicks
    btn.addEventListener('click', function(){
        //"this" is the button being clicked...
        console.log(this.innerText)
        readout.innerText += this.innerText
    })
})