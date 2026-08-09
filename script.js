const investmentRange = document.getElementById('investmentRange');
const investmentInput = document.getElementById('investmentInput');
const currentInvestment = document.getElementById('currentInvestment');
const monthlyReturn = document.getElementById('monthlyReturn');

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function updateCalculator(value) {
  const amount = Math.max(300, Number(value) || 300);
  const safeAmount = Math.round(amount / 50) * 50;

  if (investmentRange) {
    investmentRange.value = safeAmount;
  }

  if (investmentInput) {
    investmentInput.value = safeAmount;
  }

  const returnValue = safeAmount * 0.07;

  if (currentInvestment) {
    currentInvestment.textContent = formatMoney(safeAmount);
  }

  if (monthlyReturn) {
    monthlyReturn.textContent = formatMoney(returnValue);
  }

  if (investmentRange) {
    const percentage = ((safeAmount - 300) / (10000 - 300)) * 100;
    investmentRange.style.setProperty('--fill', `${Math.max(0, Math.min(100, percentage))}%`);
  }
}

if (investmentRange) {
  investmentRange.addEventListener('input', (event) => {
    updateCalculator(event.target.value);
  });
}

if (investmentInput) {
  investmentInput.addEventListener('input', (event) => {
    updateCalculator(event.target.value);
  });
}

updateCalculator(1000);
