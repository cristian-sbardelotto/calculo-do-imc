const nameInput = document.querySelector('#name-input');
const heightInput = document.querySelector('#height-input');
const weightInput = document.querySelector('#weight-input');
const main = document.querySelector('main');
const calcButton = document.querySelector('#calc-button');

const calcImc = () => {
  let heightSquared = heightInput.value ** 2;
  let weight = weightInput.value;

  const imc = (weight / heightSquared).toFixed(3);
  
  if (nameInput.value.length == 0 || heightInput.value.length == 0 || weightInput.value.length == 0) {
    alert('[ERRO] Preencha todos os dados antes de calcular!');
  }
   else if (nameInput.value.length > 20) {
    alert('[ERRO] O seu nome excedeu a quantidade máxima de caracteres!');
  }
   else if (Number(heightInput.value) < 0) {
    alert('[ERRO] A sua altura é menor que zero😂? Cheque o campo de "altura"!');
  }
   else if (Number(weight.value) < 0) {
    alert('[ERRO] O seu peso é menor que zero😂? Cheque o campo de "peso"!');
  }
   else {
    main.innerHTML = `
      <p class="result" style="margin: 0 0 2rem 0;">
        Olá ${nameInput.value}, o seu Índice de Massa Corporal (IMC) é de ${imc}
      </p>
      <button class='button' onclick="location.reload()">Voltar ao início</button>
    `;
  }
};

calcButton.addEventListener('click', event => {
  event.preventDefault();

  calcImc();
});
