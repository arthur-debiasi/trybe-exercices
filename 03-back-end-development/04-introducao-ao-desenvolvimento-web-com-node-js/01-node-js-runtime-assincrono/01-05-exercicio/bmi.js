const readLineSync = require('readline-sync');

const bmiData = {
  weight: 80,
  height: 1.8
}

function bmi () {
  const height = readLineSync.questionFloat(`What is your height? `);
  const weight = readLineSync.questionFloat(`What is your weight? `);
  return weight / (height ** 2);
}

function bmiClassification(bmi) {
  let bmiClass = "MORBIDLY OBESE"
  let healthRisk = 'EXTREMELY HIGH';
  switch (true) {
    case bmi < 18.5:
      bmiClass = 'UNDERWEIGHT';
      healthRisk = 'MINIMAL';
      break;
    case bmi < 25:
      bmiClass = 'NORMAL';
      healthRisk = 'MINIMAL';
      break;
    case bmi < 30:
      bmiClass = 'OVERWEIGHT';
      healthRisk = 'INCREASED';
      break;
    case bmi < 35:
      bmiClass = 'OBESE';
      healthRisk = 'HIGH';
      break;
    case bmi < 40:
      bmiClass = 'SEVERELY OBESE';
      healthRisk = 'VERY HIGH';
      break;
    default:
      break;
  }
  return `Your BMI is: ${bmi.toFixed(2)}
  Your BMI classification is : ${bmiClass}
  Your Health Risk is : ${healthRisk}`
} 

function main() {
  const readBmi = bmi();
  console.log(bmiClassification(readBmi));
}

main()