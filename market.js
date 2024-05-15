
//Перевірка підключеного файлу скриптів 
console.log('Перевірка підключеного файлу скриптів market.js')

// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку

if (itemsDiv) {

    //Вивід знайденого елементу
    
    console.log(itemsDiv)
    //Вивід значення поля знайденого елементу
    
    console.log('Поле classList: ', itemsDiv.classList) 
    console.log('Поле id:', itemsDiv.id) 
    console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML:', itemsDiv.innerHTML)
    
    //Додавання тексту в блок
    
    itemsDiv.innerText= 'Програмно доданий текст'
    
    } else {
    
    //Вивід повідомлення про не знайдений блок
    
    console.log("Блок товарів не знайдено")
}
var goodsArray = [
    { id: 1, name: 'Товар 1' },
    { id: 2, name: 'Товар 2' },
    { id: 3, name: 'Товар 3' },
    { id: 4, name: 'Товар 4' },
    { id: 5, name: 'Товар 5' },
    { id: 6, name: 'Товар 6' },
    { id: 7, name: 'Товар 7' },
    { id: 8, name: 'Товар 8' },
    { id: 9, name: 'Товар 9' },
    { id: 10, name: 'Товар 10' },
    { id: 11, name: 'Товар 11' },
    { id: 12, name: 'Товар 12' }
];

console.log(goodsArray);
