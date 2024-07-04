const array = [[1, 4, 5], [1, 3, 4], [2, 6]]

let newArray = []

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j])
    }
}

console.log(`Одномерный массив: ${newArray}`)
console.log(`Отсортированный массив: ${newArray.sort()}`)