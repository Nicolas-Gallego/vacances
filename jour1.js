// 02 - Compter les voyelles
console.log("---------02 - Compter les voyelles---------")
function countVowels(str) {
    var vowelsCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "y") {
            vowelsCount++
        }
    }
    console.log(`le nombre de voyelles dans \"${str}\" est ${vowelsCount}`)
}
countVowels("Salut")
countVowels("testons ça")
countVowels("Ça marche parfaitement bien !")

console.log("---------------------------------------------")