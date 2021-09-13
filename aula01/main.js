let pageInfo = document.querySelector(".page-info");
let pageName = document.querySelector(".page-name");
let pageGrade = document.querySelector(".page-grade");

const notaDoPrimeiroBimestre = 9.48454;
const notaDoSegundoBimestre = 7.784;
const notaDoTerceiroBimestre = 4;
const notaDoQuartoBimestre = 2.874;

/* Cálculo da nota final */
const notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;
const notaFinalFixada = notaFinal.toFixed(1);

const aprovadoOuReprovado = notaFinalFixada >= 6 ? "aprovado" : "reprovado.";

pageName = "Henrique";
pageInfo.textContent = `Bem vindo, ${pageName}.`;
pageGrade.textContent = `Sua nota é ${notaFinalFixada} e você está ${aprovadoOuReprovado}.`;
