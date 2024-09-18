//addMoney to the account

//step 1: add an event to addMoney button inside the form
//   and: prevent page reload
//step 2: get money from the input field to be added to the account
//   and: get the inputed pin number
//step 3: verify the pin number
// step 4: get the current balance

document.getElementById('btn-addMoney').addEventListener('click', function(event){
    //prevent page reload
    event.preventDefault();
    //step 2: get money from the input field to be added to the account
    const addMoneyInput = document.getElementById('inputMoney').value;
    console.log(addMoneyInput);
    // and: get the inputed pin number
    const inputPin = document.getElementById('addedPin').value;
    console.log(inputPin);
    //step 3: verify the pin number
    //wrong way of verifying, it's temporary!
    if (inputPin === '1234'){
        // step 4: get the current balance
        const balance = document.getElementById('currentBalance').innerText;
        console.log(balance);
        // step 5: add input money with current balance
        const addMoneyInputNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyInputNumber+balanceNumber;
        console.log(newBalance);
        // step 6: update the account balance
        document.getElementById('currentBalance').innerText = newBalance;
    }
    else{
        alert('failed to add your amount to your account');
    }

})