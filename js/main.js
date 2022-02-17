document.getElementById('calculate-button').addEventListener('click', function () {
    // food 
    const foodErBill = document.getElementById('food-cost');
    const foodErBillText = foodErBill.value;
    const foodTotalBill = parseInt(foodErBillText);
    foodErBill.value = foodTotalBill;



    // rent 
    const rentErBill = document.getElementById('rent-cost');
    const rentErBillText = rentErBill.value;
    const rentTotalBill = parseInt(rentErBillText);
    rentErBill.value = rentTotalBill;

    // clothes 
    const clothErBill = document.getElementById('cloth-cost');
    const clothErBillText = clothErBill.value;
    const clothTotalBill = parseInt(clothErBillText);
    clothErBill.value = clothTotalBill;
    // const totalExpenses = foodTotalBill + rentTotalBill + clothTotalBill

    // total expenses 
    const totalExpenses = document.getElementById('total-expenses');
    const subTotalExpenses = totalExpenses.innerText;
    const finalTotalExpenses = foodTotalBill + rentTotalBill + clothTotalBill;
    totalExpenses.innerText = finalTotalExpenses;

    // clear
    foodErBill.value = '';
    rentErBill.value = '';
    clothErBill.value = ''

    //  total balance 
    const totalIncome = document.getElementById('Total-Income');
    const inputTotalIncomeText = totalIncome.value;
    const inputTotalIncome = parseInt(inputTotalIncomeText);

    const finalBalance = inputTotalIncome - finalTotalExpenses;
    document.getElementById('total-Balance').innerText = finalBalance;


})


document.getElementById('parcent-button').addEventListener('click', function () {
    const totalIncome = document.getElementById('Total-Income');
    const totalIncomeText = totalIncome.value;
    const subTotalIncome = parseInt(totalIncomeText);
    const parcent = document.getElementById('parcent');
    const parcentText = parcent.value;
    const TotalParcent = parseInt(parcentText);
    const savingAmount = subTotalIncome * TotalParcent / 100;
    document.getElementById('saving-amount').innerText = savingAmount;

    const totalBalance = document.getElementById('total-Balance');
    const totalBalanceText = totalBalance.innerText;
    const finalBalance = parseFloat(totalBalanceText);
    const remainingAmount = finalBalance - savingAmount;
    document.getElementById('remaining-balance').innerText = remainingAmount;

    parcent.value = '';

})