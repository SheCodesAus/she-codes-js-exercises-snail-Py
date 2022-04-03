
let shoppingItems = ["milk", "eggs"];

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    shoppingItems.forEach((item) => {
        console.log(item);
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
};

updateItems();

function addItem() {
    let item = document.getElementById("new-item-text");
    shoppingItems.push(item.value);
    console.log(shoppingItems);
    updateItems();
    item.value = "";
};


// Clear all input of the page

function clearList() {
    shoppingItems = [];
    updateItems();
};
