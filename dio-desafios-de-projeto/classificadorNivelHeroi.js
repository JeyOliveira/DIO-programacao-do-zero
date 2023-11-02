let Heroi = "Leona"
let Xp = 7563
let nivel 

if (Xp < 1001) {
    nivel = "ferro"
} else if (Xp > 1000 && Xp < 2001) {
    nivel = "Bronze"

} else if (Xp > 2000 && Xp < 6001) {
    nivel = "Prata"

} else if (Xp > 5000 && Xp < 7001) {
    nivel = "Ouro"

} else if (Xp > 7000 && Xp < 8001) {
    nivel = "Platina"

} else if (Xp > 8000 && Xp < 9001) {
    nivel = "Ascendente"

} else if (Xp > 9000 && Xp < 10001) {
    nivel = "Imortal"

} else{
    nivel = "radiante"

}

console.log("O herói de nome " + Heroi + " está no nível de " + nivel + ".") 