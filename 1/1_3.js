const words = ['дим', 'манек', 'рота']
let answer = ''

words.forEach(el => {
    answer = el.slice(0, -1) + el.split('').reverse().join('')
    console.log(answer)
})