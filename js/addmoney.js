

document.getElementById('btn-noakhali').addEventListener('click',function(event){
    event.preventDefault();
    const donationForNoakhali = getInputValueById('money-noakhali');
    if(isNaN(donationForNoakhali)){
        alert('Invalid amount. please enter numbers.');
        return;
    }   
    const mainBalance = getNumberById('main-balance');
    let noakhaliBalance = getNumberById('noakhali-balance');    
    if(donationForNoakhali > mainBalance){
        alert('insuficient Balance');
        return;
    }
    const newBalance = mainBalance - donationForNoakhali;
    noakhaliBalance+=donationForNoakhali;
    const place = 'Food relief in Noakhali';
    donationHistory(donationForNoakhali,place);  
    showPopUp();
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('noakhali-balance').innerText = noakhaliBalance;
    //console.log('dontion for noakhali is: ',donationForNoakhali);

});

document.getElementById('btn-feni').addEventListener('click',function(event){
    event.preventDefault();
    const donationForFeni = getInputValueById('money-feni');
    if(isNaN(donationForFeni)){
        alert('Invalid amount. please enter numbers.');
        return;
    }  
    const mainBalance = getNumberById('main-balance');
    let feniBalance = getNumberById('feni-balance');
     
    if(donationForFeni >  mainBalance){
        alert('insuficient Balance');
        return;
    }
    const newBalance = mainBalance - donationForFeni;
    feniBalance+=donationForFeni;
    const place = 'Food relief in Feni';
    donationHistory(donationForFeni,place);   
    showPopUp();
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('feni-balance').innerText = feniBalance;
    //console.log('donation for feni is: ',donationForFeni);
});

document.getElementById('btn-injurs').addEventListener('click',function(event){
    event.preventDefault();
    const donationForInjurs = getInputValueById('money-injurs');
    if(isNaN(donationForInjurs)){
        alert('Invalid amount. please enter numbers.');
        return;
    }   
    const mainBalance = getNumberById('main-balance');
    let injursBalance = getNumberById('injures-balance');
    
    if(donationForInjurs > mainBalance){
        alert('insuficient Balance');
        return;
    }    
    const newBalance = mainBalance - donationForInjurs;
    injursBalance+=donationForInjurs;
    const place = 'Injured in the Quota Movement';
    donationHistory(donationForInjurs,place);    
    showPopUp();
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('injures-balance').innerText = injursBalance;
    //console.log('donation for injurs: ', donationForInjurs);
});

document.getElementById('show-donation-section').addEventListener('click',function(){
    showSectionById('donation-section');
    document.getElementById('show-history-section').classList.remove('bg-[#B4F461]');
    document.getElementById('show-donation-section').classList.add('bg-[#B4F461]');
});

document.getElementById('show-history-section').addEventListener('click',function(){
    showSectionById('history-section');
    document.getElementById('show-donation-section').classList.remove('bg-[#B4F461]');
    document.getElementById('show-history-section').classList.add('bg-[#B4F461]');
});

document.getElementById('show-blog-section').addEventListener('click',function(){
    document.getElementById('show-blog-section').classList.add('hidden');
    document.getElementById('show-home-section').classList.remove('hidden');
    document.getElementById('menu-section').classList.add('hidden');
    showSectionById('blog-section');
           
});
document.getElementById('show-home-section').addEventListener('click',function(){
    showSectionById('donation-section'); 
    document.getElementById('show-home-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');
    document.getElementById('show-blog-section').classList.remove('hidden');
    document.getElementById('menu-section').classList.remove('hidden');
})

document.getElementById('close-pop-up').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('pop-up').classList.add('hidden');
})