// 🚀 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

// 🚀 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele
// ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const allLessons = {
  lesson1: {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
  },
  lesson2: {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
    turno: "noite",
  },
  lesson3: {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
  },
};
console.log("=-=-=-=-=-1=-=-=-=-=-");

function mathStudents(obj) {
  let count = 0;
  const lessons = Object.keys(obj);
  for (const index in lessons) {
    if (obj[lessons[index]].materia === "Matemática") {
      count += obj[lessons[index]].numeroEstudantes;
    }
  }
  return count;
}

console.log(mathStudents(allLessons));

console.log("=-=-=-=-=-2=-=-=-=-=-");

const createReport = (obj, teacherStrng) => {
  const teacherReportObj = {};
  const lessons = Object.keys(obj);
  const subjects = [];
  let studentCount = 0;
  for (const index in lessons) {
    if (obj[lessons[index]].professor === teacherStrng) {
      teacherReportObj.professor = teacherStrng;
      subjects.push(obj[lessons[index]].materia);
      teacherReportObj.materia = subjects;
      studentCount += obj[lessons[index]].numeroEstudantes;
      teacherReportObj.estudantes = studentCount;
    }
  }
  return teacherReportObj;
};
console.log(createReport(allLessons, 'Maria Clara'))