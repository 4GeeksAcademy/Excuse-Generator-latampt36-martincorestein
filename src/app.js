/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El perro", "Mi abuela", "El Loro", "Mi gato"];
  let action = ["se comió", "rompió", "perdió", "tiró"];
  let what = ["mi tarea", "mi teléfono", "las llaves", "el auto"];
  let when = [
    "antes de la clase",
    "mientras dormía",
    "cuando estaba en el gimnasio",
    "durante el almuerzo"
  ];

  const excusaAleatoria = array => Math.floor(Math.random() * array.length);

  let excuse =
    who[excusaAleatoria(who)] +
    " " +
    action[excusaAleatoria(action)] +
    " " +
    what[excusaAleatoria(what)] +
    " " +
    when[excusaAleatoria(when)];

  document.getElementById("excuse").innerHTML = "¡" + excuse + "!";
};
