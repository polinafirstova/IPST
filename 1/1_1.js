const str = 'DDADSADASDAAADS'
let answer = ''

for (let c of str) {
    if (!answer.includes(c)) {
        answer += c
    }
}

console.log(answer)