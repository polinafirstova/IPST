const str = 'hello alexandr!'
let answer = ''

let current = str[0]
for (let c of str) {
    if (current !== '') {
        if (c !== ' ') {
            answer += current
        } else {
            current = ''
            answer += c
        }
    } else {
        current = c
        answer += c
    }
}

console.log(answer)