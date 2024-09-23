//alert('function js added');
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber= parseFloat(inputValue);
    return inputNumber;
}

function getNumberById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}