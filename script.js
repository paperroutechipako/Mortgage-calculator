function calculateRepayments() {
    const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value) || 0;
    const mortgageTerm = parseFloat(document.getElementById('mortgageTerm').value) || 0;
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 || 0;
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    if (mortgageAmount <= 0 || mortgageTerm <= 0 || interestRate < 0) {
        document.getElementById('resultText').innerText = 'Please enter valid values.';
        return;
    }

    let monthlyRepayment = 0;
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = mortgageTerm * 12;

    if (mortgageType === 'repayment') {
        // Simplified repayment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
        monthlyRepayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    } else {
        // Interest only: Monthly payment is just the interest
        monthlyRepayment = mortgageAmount * monthlyInterestRate;
    }

    document.getElementById('resultText').innerText = `Monthly Repayment: £${monthlyRepayment.toFixed(2)}`;
}