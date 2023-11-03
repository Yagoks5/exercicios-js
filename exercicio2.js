let salarioBruto = 3000;

function retornarPorcertagemComBaseNoSalario(salario) {
  if (salario <= 1100) {
    return 5;
  } else if (salario > 1100 && salario <= 2500) {
    return 10;
  } else if (salario > 2500) {
    return 15;
  }
}

function calcularPorcentagem(salario, porcentagem) {
  return salario * (porcentagem / 100);
}

const valorATransferir =
  salarioBruto -
  calcularPorcentagem(
    salarioBruto,
    retornarPorcertagemComBaseNoSalario(salarioBruto)
  );
console.log(valorATransferir);
