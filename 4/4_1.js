const object = { a: 1, b: 2 }

function convertToArray(object) {
    return Object.entries(object)
}

console.log(convertToArray(object))