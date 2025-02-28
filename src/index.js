const colorRandom = document.getElementById('color');
const btn = document.getElementById('btn');

const hexDigit = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F'
];

let colorHandler = () => {
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    hex += hexDigit[Math.floor(Math.random() * 16)];
  }

  colorRandom.innerText = hex;
  document.body.style.backgroundColor = hex;
}

btn.addEventListener('click', colorHandler);
window.addEventListener('load', colorHandler);