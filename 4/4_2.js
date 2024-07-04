class Worker {
    name
    surname
    rate
    days
    
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary() {
        let salary = this.rate * this.days
        console.log(`Зарплата: ${salary} руб.`)
    }
}

const worker =  new Worker('Иван', 'Иванов', 2500, 14)
worker.getSalary()