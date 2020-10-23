const buttons = document.querySelectorAll('button');

let enteredNumbers = [];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    enteredNumbers.push(button.value);
  });
});
