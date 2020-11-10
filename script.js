const pwEl = document.getElementById('pw');
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');

const lowers = 'abcdefghijklmnopqrstuvwxyz';
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=';

function getLower() {
  return lowers[Math.floor(Math.random() * lowers.length)];
}
function getUpper() {
  return uppers[Math.floor(Math.random() * uppers.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

generateEl.addEventListener('click', () => {
  len = lengthEl.value;
  password = '';

  for (let i = 0; i < len; i++) {
    password += generateX();
  }

  pwEl.innerText = password;
});

function generateX() {
  xs = [];

  if (lowerEl.checked == true) {
    xs.push(getLower());
  }
  if (upperEl.checked == true) {
    xs.push(getUpper());
  }
  if (numberEl.checked == true) {
    xs.push(getNumber());
  }
  if (symbolEl.checked == true) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return '';
  x = xs[Math.floor(Math.random() * xs.length)];
  return x;
}

copyEl.addEventListener('click', () => {
  let textarea = document.createElement('textarea');

  textarea.innerText = pwEl.innerText;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  if (pwEl.innerText !== '') {
    alert('Copied to clipboard');
  }
});
