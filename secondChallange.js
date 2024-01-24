let matches = 0
let wins = 0
let loses = 0
let balance = ""
let rank = ""

function calculation(win, lose){
   let result = win - lose
   return result
}

console.log("O jogador precisa jogar, pelo menos, 10 partidas para entrar em um rank, e todos os cálculos de ranks são feitos a cada 10 partidas.")

do {
    matches += 10
    wins += 8
    loses += 2
} while (matches < 100)

console.log("O seu número de partidas totais é de " + matches + " com " + wins + " partidas ganhas e " + loses + " derrotas.")

balance = calculation(wins, loses)

if (balance > 0 && balance <= 10){
    rank = "Ferro"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else if (balance > 10 && balance <= 20){
    rank = "Bronze"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else if (balance > 20 && balance <= 50){
    rank = "Prata"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else if (balance > 50 && balance <= 80){
    rank = "Ouro"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else if (balance > 80 && balance <= 90){
    rank = "Diamante"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else if (balance > 90 && balance <= 100){
    rank = "Lendário"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else if (balance >= 101){
    rank = "Imortal"
    console.log("O jogador tem saldo de vitórias de " + balance + " e está no rank " + rank + ".")
} else{
    console.log("Saldo de vitórias do jogador é 0, não é possível entrar no rank atualmente. Ganhe mais partidas antes de poder ter um rank.")
}





