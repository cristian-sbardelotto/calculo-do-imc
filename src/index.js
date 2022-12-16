const nameInput = document.querySelector('#name-input');
const heightInput = document.querySelector('#height-input');
const weightInput = document.querySelector('#weight-input');
const main = document.querySelector('main');
const calcButton = document.querySelector('#calc-button');

const calcImc = () => {
  let heightSquared = heightInput.value ** 2;
  let weight = weightInput.value;

  const imc = (weight / heightSquared).toFixed(3);
  main.innerHTML = `
    <p class="result" style="margin: 0;">
      Olá ${nameInput.value}, o seu Índice de Massa Corporal (IMC) é de ${imc}
    </p>
  `;
};

calcButton.addEventListener('click', event => {
  event.preventDefault();

  calcImc();
});
