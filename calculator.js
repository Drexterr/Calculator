/* Add an empty string */
let string = '';
let input = document.getElementById('input')
/* Select all buttons using query selector*/
let buttons = document.querySelectorAll('.button');
/* Create an array for the buttons*/
let arr = Array.from(buttons);
/*add event listener to every button*/
arr.forEach(button => {
    button.addEventListener('click', (e) => {

/* Use if-else for putting conditions on the inner HTML*/
        if (e.target.innerHTML == '=' ) {
            string = eval(string);
            input.value = string;
        }
       
        else if (e.target.innerHTML == 'C') {
            string = '';
            input.value = string;

        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })


})