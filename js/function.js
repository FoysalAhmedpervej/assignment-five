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

function showSectionById(id){
    
    document.getElementById('donation-section').classList.add('hidden');   

    document.getElementById('history-section').classList.add('hidden');    

    //show the section with id
    document.getElementById(id).classList.remove('hidden');
   
}