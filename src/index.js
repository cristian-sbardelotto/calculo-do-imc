const nameInput = document.querySelector("#name-input");
const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");
const result = document.querySelector('.result');
const calcButton= document.querySelector('#calc-button');

const calcImc = () => {
  let heightSquared = heightInput.value ** 2;
  let weight = weightInput.value;

  const imc = (weight / heightSquared).toFixed(3);

  result.innerHTML = `Olá ${nameInput.value}, o seu Índice de Massa Corporal é de ${imc}`;
};

calcButton.addEventListener('click', event => {
  event.preventDefault();

  calcImc();
});