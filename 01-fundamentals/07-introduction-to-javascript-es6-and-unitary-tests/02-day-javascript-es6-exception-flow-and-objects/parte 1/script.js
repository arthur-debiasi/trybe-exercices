
const verifyIsNumber = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error("Preencha os dois campos para realizar a soma.");
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error("Informe apenas números para realizar a soma.");
  }
};

function sum() {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const result = Number(value1) + Number(value2);
    verifyIsNumber(value1, value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (error) {
    console.log(error.message);
    document.getElementById("result").innerHTML = `Erro: ${error.message}`;

  } finally {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
  }
}
window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};
// --------------------------------------------------------------------------

