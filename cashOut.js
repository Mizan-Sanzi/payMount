//addMoney to the account

//step 1: add an event to addMoney button inside the form
//   and: prevent page reload
//step 2: get money from the input field to be added to the account
//   and: get the inputed pin number
//step 3: verify the pin number
// step 4: get the current balance
console.log('Hello')
document.getElementById('btn-cashOut').addEventListener('click', function(event){
    //prevent page reload
    event.preventDefault();
    //step 2: get money from the input field to be added to the account
    const cashOutInput = document.getElementById('cashOutAmount').value;
    console.log(cashOutInput);
    // and: get the inputed pin number
    const inputPin = document.getElementById('cashOutPin').value;
    console.log(inputPin);
    //step 3: verify the pin number
    //wrong way of verifying, it's temporary!
    if (inputPin === '2345'){
        // step 4: get the current balance
        const balance = document.getElementById('currentBalance').innerText;
        console.log(balance);
        // step 5: add input money with current balance
        const cashOutInputNumber = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber-cashOutInputNumber;
        console.log(newBalance);
        // step 6: update the account balance
        document.getElementById('currentBalance').innerText = newBalance;
    }
    else{
        alert('failed to add your amount to your account');
    }
});