let month = 11
let year = 2024

let season = ''
let isLeap = false

if (month >= 3 && month <= 5) {
    season = 'весна'
} else if (month >= 6 && month <= 8) {
    season = 'лето'
} else if (month >= 9 && month <= 11) {
    season = 'осень'
} else {
    season = 'зима'
}

console.log(`Месяц — ${month}, время года — ${season}`)

if (year % 4 === 0) {
    isLeap = true
}

console.log(`${year} год — ${isLeap ? 'високосный' : 'невисокосный'}`)
