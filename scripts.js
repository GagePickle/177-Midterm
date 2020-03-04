const items = {};

items.name = prompt("Enter the name of the item.");
while (items.name === "") {
  alert("Please enter data for the item's name");
  items.name = prompt("Enter the name of the item.");
}
items.price = Number(prompt("Enter the price of the item"));
while (!items.price) {
  alert("Please enter a number for the item's price");
  items.price = Number(prompt("Enter the price of the item"));
}

alert(items.name + " is worth " + items.price + " Rubels");
