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


function showtime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long', // Automatically detect and show user's time zone and place
        hour12: false
    };
    
    return new Intl.DateTimeFormat('en-US', options).format(now);
}

function donationHistory(donation, place) {
    // Create a new div for the donation entry
    const div = document.createElement('div');    
    const dateTime = showtime(); // Get the current date and time
    div.innerHTML = `
        <h2 class="text-xl font-bold">${donation} taka donated for ${place}, Bangladesh</h2>
        <p class="text-gray-600 mt-4">Date: ${dateTime} </p>
    `;
    div.classList.add('border', 'md:p-5','p-2', 'mx-auto', 'rounded-xl','md:w-4/5','w-full');

    // Append the new donation entry to the transaction container
    const historyContainer = document.getElementById('history-container');
   
    historyContainer.appendChild(div);
   
}


function showPopUp(){
    document.getElementById('pop-up').classList.remove('hidden');
}
