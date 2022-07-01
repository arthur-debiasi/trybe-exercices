function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  // lista de dias do mês de dezembro...

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//função que cria os dias do mês de desembro.

function createDecMonthDays() {
  // cria a unordered list que vai receber os list items dos dias
  let ulDays = document.getElementById('days');
  
  // faz o loop para criação de cada dia com suas condicionais

for (let decemberDay of decemberDaysList) {

// cria o li e adiciona o dia dentro do seu html

  let liDay = document.createElement('li');
  liDay.innerHTML = decemberDay;
// cria as condicionais para todos os dias (sextas, feriados e demais)
  if (decemberDay === 24 || decemberDay === 31) {
    liDay.className = 'day holiday';
    ulDays.appendChild(liDay);   
  } else if (decemberDay === 4 || decemberDay === 11 || decemberDay === 18){
    liDay.className = 'day friday';
    ulDays.appendChild(liDay)
  } else if (liDay === 25){
    liDay.className = 'day holiday friday';
    ulDays.appendChild(liDay);
  } else {
    liDay.className = 'day';
  }

ulDays.appendChild(liDay)    
}
}
createDecMonthDays();
