const array = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5]

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp
        }
    }
    return array
}

let sortArray = selectionSort(array)
console.log(`Отсортированный массив: ${sortArray}`)

function binarySearch(array, element) {
    let start = 0
    let end = array.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (array[middle] === element) {
            return middle
        } else if (array[middle] < element) {
            start = middle + 1
        } else if (array[middle] > element) {
            end = middle - 1
        }
    }
}

console.log(`Индекс элемента со значением 0: ${binarySearch(sortArray, 0)}`)
