function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// lista de dias do mês de dezembro...

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

//função que cria os dias do mês de desembro.

// cria a unordered list que vai receber os list items dos dias
// faz o loop para criação de cada dia com suas condicionais
// cria o li e adiciona o dia dentro do seu html
// cria as condicionais para todos os dias (sextas, feriados e demais)
function createDecMonthDays() {
  let ulDays = document.getElementById("days");

  for (let decemberDay of decemberDaysList) {
    let liDay = document.createElement("li");
    liDay.innerHTML = decemberDay;
    if (decemberDay === 24 || decemberDay === 31) {
      liDay.className = "day holiday";
      ulDays.appendChild(liDay);
    } else if (decemberDay === 4 || decemberDay === 11 || decemberDay === 18) {
      liDay.className = "day friday";
      ulDays.appendChild(liDay);
    } else if (decemberDay === 25) {
      liDay.className = "day holiday friday";
      ulDays.appendChild(liDay);
    } else {
      liDay.className = "day";
    }

    ulDays.appendChild(liDay);
  }
}
createDecMonthDays();

function holidayButton(buttonName) {
  // Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
  // Adicione a este botão a ID "btn-holiday"
  // Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

  let buttonContainer = document.getElementsByClassName("buttons-container")[0];
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = buttonName;
  buttonContainer.appendChild(button);
}

holidayButton("Feriados");

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"

function holidayColors() {
  // * selecionar todos os elementos com a classe `"holiday"`;
  // * selecionar o botão `"Feriados"`;
  // * adicionar variáveis para armazenar as cores.
  let decemberHolidays = document.getElementsByClassName("holiday");
  let holidayBtn = document.getElementById("btn-holiday");
  let bckGrndColorDefault = "rgb(238,238,238)";
  let holidayColor = "bisque";
  //  Adicione um escutador de eventos ao botão, esse escutador deve aguardar um clique.
  holidayBtn.addEventListener("click", function () {
    // Percorra o array de feriados e adicione as condições para troca de cor.
    for (let index = 0; index < decemberHolidays.length; index += 1) {
      if (decemberHolidays[index].style.backgroundColor === holidayColor) {
        decemberHolidays[index].style.backgroundColor = bckGrndColorDefault;
      } else {
        decemberHolidays[index].style.backgroundColor = holidayColor;
      }
    }
  });
}

holidayColors();

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber
// como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

// Crie a função e adicione variáveis para armazenar:
// * o `container` de botões;
// * a criação de um botão;
// * o id do botão.

function fridayButton() {
  let container = document.getElementsByClassName('buttons-container')
}

fridayButton("Sexta-Feira")