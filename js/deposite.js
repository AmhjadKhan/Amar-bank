//1. get element from id 
document.getElementById('btn-deposite').addEventListener('click', function() {

    const newDepositeAmmount = getInputFildValueById('diposite-fild');

    const previDepositeTotal = gettextElementValueById('diposite-total');

    const newDepositeTotal = previDepositeTotal + newDepositeAmmount;
    setElementTextValueById('diposite-total', newDepositeTotal)

    const previBalanceTotal = gettextElementValueById('balance-total')
    const newBalanceTotal = previBalanceTotal + newDepositeAmmount;
    setElementTextValueById('balance-total', newBalanceTotal);



    
})