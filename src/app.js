/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Elige aleatoriamente los elementos del array
  function aleatorio(newArray) {
    let x = Math.floor(Math.random() * newArray.length);
    return newArray[x];
  }
  // Concatena los elementos de los arrays
  function excusa(arreglo) {
    let frase = "";
    arreglo.forEach(element => {
      frase += aleatorio(element) + " ";
    });
    return frase;
  }
  // Inserta la frase en el HTML
  function insertarElemento(elemento, identificador, texto) {
    let parrafo = document.createElement(elemento);
    parrafo.innerHTML = texto;
    document.getElementById(identificador).appendChild(parrafo);
  }

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let textoAInsertar = excusa([who, action, what, when]);
  insertarElemento("p", "container", textoAInsertar);
};
