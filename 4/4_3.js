class Worker {
    #name
    #surname
    #rate
    #days

    constructor(name, surname, rate, days) {
        this.#name = name
        this.#surname = surname
        this.#rate = rate
        this.#days = days
    }

    get name() {
        return this.#name
    }

    get surname() {
        return this.#surname
    }

    get rate() {
        return this.#rate
    }

    get days() {
        return this.#days
    }

    getSalary() {
        let salary = this.#rate * this.#days
        console.log(`Зарплата: ${salary} руб.`)
    }
}

const worker = new Worker('Иван', 'Иванов', 2500, 14)
// worker.getSalary()
console.log(`Имя: ${worker.name}`)
console.log(`Фамилия: ${worker.surname}`)
console.log(`Ставка за день работы: ${worker.rate}`)
console.log(`Количество отработанных дней: ${worker.days}`)