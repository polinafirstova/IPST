class Calculation {
    calculationLine

    constructor(calculationLine) {
        this.calculationLine = calculationLine
    }

    setterCalculationLine(newCalculationLine) {
        this.calculationLine = newCalculationLine
    }

    setLastSymbolCalculationLine(value) {
        this.calculationLine += value
    }

    getterCalculationLine() {
        console.log(`Переменная: ${this.calculationLine}`)
    }

    lastSymbol() {
        return this.calculationLine[this.calculationLine.length - 1]
    }

    deleteLastSymbol() {
        this.calculationLine = this.calculationLine.slice(0, -1)
    }
}

const calculation = new Calculation()
console.log('Задание значения')
calculation.setterCalculationLine('qwerty1')
calculation.getterCalculationLine()
console.log('Добавление в конец символа')
calculation.setLastSymbolCalculationLine('2')
calculation.getterCalculationLine()
console.log(`Последний символ: ${calculation.lastSymbol()}`)
console.log('Удаление последнего символа')
calculation.deleteLastSymbol()
calculation.getterCalculationLine()
