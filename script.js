// script.js

// Classe principal
class Carro {

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método buzinar
  buzinar() {
    alert(`O ${this.modelo} está buzinando: Biii Biii!`);
  }
}

// Preview em tempo real
function mostrarPreview() {

  let marca = document.getElementById("marca").value;

  document.getElementById("preview").innerHTML =
    "Preview da Marca: " + marca;
}

// Função principal
function fabricarCarro() {

  // Pegando valores
  let marca = document.getElementById("marca").value;

  let modelo = document.getElementById("modelo").value;

  let ano = Number(document.getElementById("ano").value);

  // Criando objeto
  let novoCarro = new Carro(marca, modelo, ano);

  // Criando card visual
  let card = document.createElement("div");

  card.classList.add("carro");

  card.innerHTML = `
    <h3>${novoCarro.marca}</h3>
    <p>Modelo: ${novoCarro.modelo}</p>
    <p>Ano: ${novoCarro.ano}</p>
  `;

  // Clique para buzinar
  card.onclick = function() {
    novoCarro.buzinar();
  };

  // Evento extra
  card.onmouseover = function() {
    card.style.backgroundColor = "#d4edda";
  };

  card.onmouseout = function() {
    card.style.backgroundColor = "white";
  };

  // Adicionando no pátio
  document.getElementById("patio").appendChild(card);

  // Limpando campos
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("ano").value = "";

  document.getElementById("preview").innerHTML =
    "Preview da Marca:";
}
