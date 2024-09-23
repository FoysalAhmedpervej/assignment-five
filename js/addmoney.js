

document.getElementById('btn-noakhali').addEventListener('click',function(event){
    event.preventDefault();
    const donationForNoakhali = getInputValueById('money-noakhali');
    const mainBalance = getNumberById('main-balance');
    let noakhaliBalance = getNumberById('noakhali-balance');
    if(donationForNoakhali > mainBalance){
        alert('insuficient Balance');
        return;
    }
    const newBalance = mainBalance - donationForNoakhali;
    noakhaliBalance+=donationForNoakhali;
    alert('You have donated '+ donationForNoakhali +' taka for people of noakhali');
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('noakhali-balance').innerText = noakhaliBalance;
    //console.log('dontion for noakhali is: ',donationForNoakhali);

});

document.getElementById('btn-feni').addEventListener('click',function(event){
    event.preventDefault();
    const donationForFeni = getInputValueById('money-feni');
    const mainBalance = getNumberById('main-balance');
    let feniBalance = getNumberById('feni-balance');
    if(donationForFeni >  mainBalance){
        alert('insuficient Balance');
        return;
    }
    const newBalance = mainBalance - donationForFeni;
    feniBalance+=donationForFeni;
    alert('you have donated '+donationForFeni+' taka for people of Feni');
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('feni-balance').innerText = feniBalance;
    //console.log('donation for feni is: ',donationForFeni);
});

document.getElementById('btn-injurs').addEventListener('click',function(event){
    event.preventDefault();
    const donationForInjurs = getInputValueById('money-injurs');
    const mainBalance = getNumberById('main-balance');
    let injursBalance = getNumberById('injures-balance');
    if(donationForInjurs > mainBalance){
        alert('insuficient Balance');
        return;
    }
    const newBalance = mainBalance - donationForInjurs;
    injursBalance+=donationForInjurs;
    alert('you have donated '+ donationForInjurs + ' taka for injured peoples');
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('injures-balance').innerText = injursBalance;
    //console.log('donation for injurs: ', donationForInjurs);
});

