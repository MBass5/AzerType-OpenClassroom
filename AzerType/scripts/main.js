/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

lancerJeu();

const inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);

const inputBtnValiderMot = document.getElementById("btnValiderMot");
console.log(inputBtnValiderMot);

const motPropose = document.querySelector(".zoneSaisie input");
console.log(motPropose);

const score = document.querySelector(".zoneScore span");
console.log(score);

const btnRadioChoix = document.querySelectorAll(".optionSource input");
console.log(btnRadioChoix);

for (let i = 0; i < btnRadioChoix.length; i++) {
  console.log(btnRadioChoix[i]);
}
