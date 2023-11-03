let saldoVitorias;

function retornaSaldoVitorias(numeroVitorias, numeroDerrotas) {
  saldoVitorias = numeroVitorias - numeroDerrotas;
  return saldoVitorias;
}
function resultadoRank(saldoVitorias) {
  if (saldoVitorias <= 10) {
    console.log(`O herói tem de saldo ${saldoVitorias} e está no nivel ferro `);
  } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    console.log(
      `O herói tem de saldo ${saldoVitorias} e está no nivel bronze `
    );
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    console.log(`O herói tem de saldo ${saldoVitorias} e está no nivel prata `);
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    console.log(`O herói tem de saldo ${saldoVitorias} e está no nivel ouro `);
  } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    console.log(
      `O herói tem de saldo ${saldoVitorias} e está no nivel Diamante `
    );
  } else if (saldoVitorias > 91 && saldoVitorias <= 100) {
    console.log(
      `O herói tem de saldo ${saldoVitorias} e está no nivel Lendário `
    );
  } else if (saldoVitorias >= 101) {
    return console.log(
      `O herói tem de saldo ${saldoVitorias} e está no nivel prata `
    );
  }
}

resultadoRank(retornaSaldoVitorias(4, 1));
resultadoRank(retornaSaldoVitorias(12, 1));
resultadoRank(retornaSaldoVitorias(32, 1));
resultadoRank(retornaSaldoVitorias(60, 1));
resultadoRank(retornaSaldoVitorias(91, 1));
resultadoRank(retornaSaldoVitorias(100, 1));
resultadoRank(retornaSaldoVitorias(200, 1));
