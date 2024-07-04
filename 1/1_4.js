const url = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json'

fetch(url).then(res => {
    if (res) {
        return res.json()
    }
}).then(data => {
    console.log(`Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}`)
    console.log(`Фамилия: ${data.person.lastName} имя: ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`)
}).catch(err => {
    console.error(err)
})