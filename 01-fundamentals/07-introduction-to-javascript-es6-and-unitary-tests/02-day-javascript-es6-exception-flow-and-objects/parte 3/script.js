const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
console.log('=======1======');

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, "turno", "noite");
console.log(lesson2);

console.log('=======2======');

const listObjKeys = (obj) => {
  return Object.keys(obj);
};

const lesson1Keys = listObjKeys(lesson1);
const lesson2Keys = listObjKeys(lesson2);
const lesson3Keys = listObjKeys(lesson3);

console.log(lesson1Keys);
console.log(lesson2Keys);
console.log(lesson3Keys);

console.log('=======3======');

const objSize = (obj) => {
  const objet = listObjKeys(obj);
  return objet.length;
};
console.log(objSize(lesson1Keys));

console.log('=======4======');

const listObjValues = (obj) => {
  return Object.values(obj);
};

console.log(listObjValues(lesson1));
console.log(listObjValues(lesson2));
console.log(listObjValues(lesson3));

console.log('=======5======');

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('=======6======');

const studentCount = (obj) => {
  const lessons = listObjKeys(obj);
  let count = 0;
  for (let i = 0; i < lessons.length; i += 1) {
    let lessonKey = lessons[i];
    count += obj[lessonKey]["numeroEstudantes"];
  }
  return console.log(count);
};
studentCount(allLessons);

console.log("=======7======");

const getValueByNumber = (lesson, number) => {
  const lessonObj = allLessons[lesson];
  const lessonKeys = listObjKeys(lessonObj);
  const keyNumber = lessonKeys[number];
  return allLessons[lesson][keyNumber];
};

console.log(getValueByNumber("lesson1", 0));

console.log("=======8======");

const verifyPair = (obj, key, value) => {
  const objEntries = Object.entries(obj);
  let isEqual = false;
  for (const index in objEntries) {
    if (objEntries[index][0] === key && objEntries[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual
}


console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));