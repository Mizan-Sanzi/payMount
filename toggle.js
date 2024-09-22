// Show Cash Out Section
document.getElementById('btn-showCashOut').addEventListener('click', function(){
    //show cash out clicked
    // console.log('cashOut button clicked!');
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden');
})

// Show Add Money Section 
document.getElementById('btn-showAddMoney').addEventListener('click', function(){
    document.getElementById('addMoneyForm').classList.remove('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
});