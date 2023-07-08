let string = "";
let buttons = document.querySelectorAll('.button, .equal-button, .special-button, .extra-special-button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == '÷') {
            string += '/';
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML  == '×') {
            string += '*';
            document.querySelector('input').value = string;
        }


        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }

    })
})

