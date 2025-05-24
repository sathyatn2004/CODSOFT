const display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');

    if (action === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (action === 'back') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    } else if (action === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (resultDisplayed && !isNaN(action)) {
        currentInput = action;
        resultDisplayed = false;
      } else {
        currentInput += action;
      }
      display.textContent = currentInput;
    }
  });
});
