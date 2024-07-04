const array = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4]

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

let sortArray = bubbleSort(array)

// console.log(sortArray)

const array2 = ['one', 'two', 'three']

console.log(sortArray.concat(array2))