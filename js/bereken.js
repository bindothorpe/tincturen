"use strict";

const inputVerhouding = document.getElementById("verhouding");
const inputAlcohol = document.getElementById("alcohol");
const inputGewensteAlcohol = document.getElementById("gewensteAlcohol");
const inputPlanten = document.getElementById("planten");

const button = document.getElementById("button");
const result = document.getElementById("result");

inputVerhouding.oninput = clearResult;
inputAlcohol.oninput = clearResult;
inputGewensteAlcohol.oninput = clearResult;
inputPlanten.oninput = clearResult;

function clearResult() {
  result.innerHTML = "";
  result.style.color = "black";
}

button.onclick = function () {
  const verhouding = parseInt(inputVerhouding.value);
  const alcohol = parseInt(inputAlcohol.value);
  const gewensteAlcohol = parseInt(inputGewensteAlcohol.value);
  const planten = parseInt(inputPlanten.value);

  let calculate = true;
  let error = `OOPS!`;
  error += `slefmlsekmfe <br>`;
  error += `slefmlsekmfe <br>`;
  error += `slefmlsekmfe <br>`;

  if (isNaN(verhouding)) {
    calculate = false;
    error += `<br>Verhouding is niet ingevuld`;
  }
  if (isNaN(alcohol)) {
    calculate = false;
    error += `<br>Alcohol (%) is niet ingevuld<br>`;
  }
  if (isNaN(gewensteAlcohol)) {
    calculate = false;
    error += `<br>Gewenste Alcohol (%) is niet ingevuld`;
  }
  if (isNaN(planten)) {
    calculate = false;
    error += `<br>Planten is niet ingevuld`;
  }

  if (calculate == false) {
    result.innerHTML = error;
    result.style.color = "red";
    return;
  }

  let aantalMlVloeistof = planten * verhouding;
  let verhoudingPercentage = alcohol / gewensteAlcohol;
  let aantalMlAlcohol = aantalMlVloeistof / verhoudingPercentage;
  let aantalMlWater = aantalMlVloeistof - aantalMlAlcohol;

  result.innerHTML = `Voor een tinctuur met <strong>${planten} gram</strong> planten en <strong>${gewensteAlcohol}%</strong> alcohol: <br>- <strong>${planten} gram</strong> planten <br>- <strong>${Math.round(
    aantalMlAlcohol
  )} ml</strong> alcohol <br>- <strong>${Math.round(
    aantalMlWater
  )} ml</strong> water`;
};
