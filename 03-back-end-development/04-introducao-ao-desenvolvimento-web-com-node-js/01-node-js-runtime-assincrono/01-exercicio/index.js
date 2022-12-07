const bmiData = {
  weight: 80,
  height: 1.8
}

function bmi ({weight, height}) {
  return weight / (height ** 2);
}

function main() {
  console.log(`BMI: ${bmi(bmiData).toFixed(2)}`);
}

main()