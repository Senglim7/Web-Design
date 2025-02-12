let displayfield = document.getElementById('display')

function display(input){
    displayfield.value += input;
}

function Clear(){
    displayfield.value = '';
}

function Equal(){
    try {
        displayfield.value = eval(displayfield.value);
    } catch (error) {
        displayfield.value = "Error";
    }
}