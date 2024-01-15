let heroi = "Leona"
let xp = 7563
let nivel 

if (xp < 1001) {
    nivel = "ferro"
} else if (xp > 1000 && xp < 2001) {
    nivel = "Bronze"

} else if (xp > 2000 && xp < 6001) {
    nivel = "Prata"

} else if (xp > 5000 && xp < 7001) {
    nivel = "Ouro"

} else if (xp > 7000 && xp < 8001) {
    nivel = "Platina"

} else if (xp > 8000 && xp < 9001) {
    nivel = "Ascendente"

} else if (xp > 9000 && xp < 10001) {
    nivel = "Imortal"

} else{
    nivel = "radiante"

}

console.log("O herói de nome " + heroi + " está no nível de " + nivel + ".") 