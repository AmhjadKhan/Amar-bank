
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmmount = getInputFildValueById('withdraw-fild');
    const previWithdraTotal = gettextElementValueById('withdraw-total')

    const newWithdrawTotal = previWithdraTotal + newWithdrawAmmount;
    setElementTextValueById('withdraw-total', newWithdrawTotal)

    const previBalanceTotal = gettextElementValueById('balance-total');
    const newBalanceTotal = previBalanceTotal - newWithdrawAmmount;

    setElementTextValueById('balance-total', newBalanceTotal);
})
