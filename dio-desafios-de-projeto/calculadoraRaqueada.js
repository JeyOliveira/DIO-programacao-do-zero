let saldoVitorias = subtrair (91, 70)
let nivel 

function subtrair(vitoria, derrota) {
    let subtracao = vitoria - derrota
    return subtracao
    
}

if (saldoVitorias < 10) {
    nivel = "Ferro"
} else if (saldoVitorias > 10 && saldoVitorias < 21) {
    nivel = "Bronze"

} else if (saldoVitorias > 20 && saldoVitorias < 51) {
    nivel = "Prata"

} else if (saldoVitorias > 50 && saldoVitorias < 81) {
    nivel = "Ouro"

} else if (saldoVitorias > 80 && saldoVitorias < 91) {
    nivel = "Diamante"

} else if (saldoVitorias > 90 && saldoVitorias < 101) {
    nivel = "Lendário"

} else{
    nivel = "Imortal"

}

console.log("O Herói tem um saldo de " + saldoVitorias + " e está no nível de " + nivel + ".") 