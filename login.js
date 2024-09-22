// document.getElementById('id').addEventListener('click', fun);
//step 1: set eventListener
document.getElementById('btn-login').addEventListener('click', function(event){
    //step 2: stop default behavior --default behavior here is page reloading...
    event.preventDefault();
    //step 3: get phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);
    //step 4: validate phone and pin number
    if (phoneNumber === '5' && pinNumber === '1234'){
        // console.log('You are logged in.');
        window.location.href = './home.html';
        //step 5 allow user to use the website
    }
    else {
        alert('Something Wrong. Try Again.');
    }
});