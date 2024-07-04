class MyString {
    reverse(string) {
        let newString = string.split('').reverse().join('')
        return newString
    }

    usFirst(string) {
        let newString = string[0].toUpperCase() + string.slice(1, string.length)
        return newString
    }

    usWords(string) {
        let words = string.split(' ')
        let newString = ''
        words.forEach(element => {
            newString += this.usFirst(element) + ' '
        })
        return newString
    }
}

const myString = new MyString()

console.log(myString.reverse('qwerty'))
console.log(myString.usFirst('qwerty qwerty'))
console.log(myString.usWords('qwerty qwerty'))