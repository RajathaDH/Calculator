const buttons = document.querySelectorAll('button');

let enteredNumbers = [];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    enteredNumbers.push(button.value);
  });
});

function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

function pow(a, b){
  return Math.pow(a, b);
}
