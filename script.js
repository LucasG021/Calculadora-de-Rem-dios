const btnCalcular = document.querySelector("#calcular");
const inputComprimidosPorDia = document.querySelector("#comprimidosPorDia");
const inputDuracaoTratamento = document.querySelector("#duracaoTratamento");
const checkboxCaixa1 = document.querySelector("#caixa1");
const checkboxCaixa30 = document.querySelector("#caixa30");
const checkboxCaixa60 = document.querySelector("#caixa60");
const checkboxCaixa120 = document.querySelector("#caixa120");
const resultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", function () {

  const comprimidosPorDia = parseInt(inputComprimidosPorDia.value);
  const duracaoTratamento = parseInt(inputDuracaoTratamento.value);


  let duracaoTratamentoTexto;
  if (duracaoTratamento > 12) {
    const anos = Math.floor(duracaoTratamento / 12);
    const meses = duracaoTratamento % 12;
    duracaoTratamentoTexto = `${anos} ano e ${meses} meses`;
  } else {
    duracaoTratamentoTexto = `${duracaoTratamento} mês`;
  }


  const totalComprimidos = comprimidosPorDia * 30 * duracaoTratamento;


  const caixas1 = Math.ceil(totalComprimidos / 1);
  const caixas30 = Math.ceil(totalComprimidos / 30);
  const caixas60 = Math.ceil(totalComprimidos / 60);
  const caixas120 = Math.ceil(totalComprimidos / 120);


  let resultadoTexto = ``;
  let totalCheckboxMarcados = 0;
  if (checkboxCaixa1.checked) {
    resultadoTexto += `Para o tratamento que tem uma duração de ${duracaoTratamento} meses você vai ter que comprar ${caixas1} caixa(s) de 1 comprimido\n`;
    totalCheckboxMarcados++;
  }
  if (checkboxCaixa30.checked) {
    resultadoTexto += `Para o tratamento que tem uma duração de ${duracaoTratamento} meses você vai ter que comprar ${caixas30} caixa(s) de 30 comprimidos\n`;
    totalCheckboxMarcados++;
  }
  if (checkboxCaixa60.checked) {
    resultadoTexto += `Para o tratamento que tem uma duração de ${duracaoTratamento} meses você vai ter que comprar ${caixas60} caixa(s) de 60 comprimidos\n`;
    totalCheckboxMarcados++;
  }
  if (checkboxCaixa120.checked) {
    resultadoTexto += `Para o tratamento que tem uma duração de ${duracaoTratamento} meses você vai ter que comprar ${caixas120} caixa(s) de 120 comprimidos\n`;
    totalCheckboxMarcados++;
  }
  
  if (totalCheckboxMarcados > 1) {
    resultadoTexto = "ERRO: Você só pode selecionar uma opção de caixa por vez!";
  }

  if (totalCheckboxMarcados === 0){
    resultadoTexto = "ERRO: Você precisa marcar uma opção para realizar o calculo!"
  }

  resultado.textContent = resultadoTexto;
});
