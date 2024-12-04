let accountBalance = 0;

function displayBalance() {
    document.getElementById('balance').textContent = `$${accountBalance}`;
}

function handleTransaction(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (event.submitter.textContent === "Withdraw") {
        if (amount > accountBalance) {
            alert("Insufficient funds.");
        } else {
            accountBalance -= amount;
            alert(`You have withdrawn $${amount}.`);
            displayBalance();
        }
    }
}

function handleDeposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    accountBalance += amount;
    alert(`You have deposited $${amount}.`);
    displayBalance();
}

document.getElementById('transaction-form').addEventListener('submit', handleTransaction);
document.getElementById('deposit-button').addEventListener('click', handleDeposit);
