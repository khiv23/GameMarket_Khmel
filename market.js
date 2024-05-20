//Перевірка підключеного файлу скриптів 
//console.log('Перевірка підключеного файлу скриптів market.js')
//визначення масиву товарів
let itemsArray =
    [
        {
            firstName: "Наталія",
            lastName: "Венцель",
            age: "18",
            subject: "Директор",
            photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
            url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
        },
        {
            firstName: "Анжела",
            lastName: "Лознюк",
            photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
            age: "18",
            subject: "Українська мова",
            url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
        },
        {
            firstName: "Наталія",
            lastName: "Звинюк",
            photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna.jpg",
            url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
            age:"18",
            subject:"Хімія",
        },
        {
            firstName: "Лариса",
            lastName: "Забело",
            photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
            age:"18",
            url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
            subject:"Англійська мова",
        },
            ]
    // ['Газонокосарка 43',
    //     'Електричний тример 110',
    //     'Електрична газонокосарка 32',
    //     'Акумуляторний оприскувач 12 N',
    //     'Газонокосарка 430',
    //     'Електричний тример 130',
    //     'Електрична газонокосарка 320',
    //     'Акумуляторний оприскувач 12 E',
    // ]
// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку
if (itemsDiv) {
    //виведення елементів масиву
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML +=
        `<div class = "item">
            <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
            <p>${item.lastName} ${item.firstName}</p>
            <p>Вік: ${item.age}<p>
            <p><img src="${item.photo}" class="item-image"> <p>
            <p><a href-"${item.url}" target-"_blank">Профіль</p>
        </div>`

        //console.log(item)
        //itemsDiv.innerHTML += '<div class = "item"></div>'
    })
}
//Вивід знайденого елементу
//console.log(itemsDiv)
// console.log(itemsDiv)
//додавання відформатованого HTML коду в блок
//itemsDiv.innerHTML+=' <div class="item"></div>'
//itemsDiv.innerHTML+=' <div class="item"></div>'
//itemsDiv.innerHTML+=' <div class="item"></div>'
//itemsDiv.innerHTML+=' <div class="item"></div>'
//for (let i = 0; i < 100; i++)
//{
//itemsDiv.innerHTML += '<div class = "item"></div>'
//}
else {
    //Вивід повідомлення про не знайдений блок
    console.log("Блок товарів не знайдено")
}
//виведення в консоль масиву
console.log(itemsArray)
//виведення в консоль елементів масиву
for (let i = 0; i < itemsArray.length; i++) {
    console.log(itemsArray[i])
}
//виведення елементів відсортованого масиву
itemsArray.sort().forEach((item) => {
    console.log(item)
})
//сортування масиву
//itemsArray = itemsArray.sort()
//виведення в консоль номерів та значень елементів масиву
//for(let i = 0; i < itemsArray.length; i++)
//{
//console.log(i + '-й елемент', itemsArray[i])
//}
//  {
//itemsDiv.innerHTML += '<div class = "item"></div>'
//}