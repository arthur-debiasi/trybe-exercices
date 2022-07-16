const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  }; 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  const listObjKeys = (obj) => {return Object.keys(obj)}

  const lesson1Keys = listObjKeys(lesson1);
  const lesson2Keys = listObjKeys(lesson2);
  const lesson3Keys = listObjKeys(lesson3);

  console.log(lesson1Keys);
  console.log(lesson2Keys);
  console.log(lesson3Keys);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const objSize = (obj) => {
  const objet = listObjKeys(obj);
  return (objet.length)
}
console.log(objSize(lesson1Keys));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const listObjValues = (obj) => {return Object.values(obj)}

console.log(listObjValues(lesson1));
console.log(listObjValues(lesson2));
console.log(listObjValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log('----------------');
console.log(allLessons);