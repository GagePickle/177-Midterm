let items = [];
let name = null;
let price = null;
let count = Number(prompt("How many items would you like to enter?"));
while (!count) {
  count = Number(
    prompt("How many items would you like to enter? Please enter a number.")
  );
}
for (let i = 0; i < count; i++) {
  name = prompt("Enter the name of the item.");
  while (name === "") {
    alert("Please enter data for the item's name.");
    name = prompt("Enter the name of the item.");
  }
  items.push(name);
  price = Number(prompt("Enter the price of the item."));
  while (!price) {
    alert("Please enter a number for the item's price.");
    price = Number(prompt("Enter the price of the item."));
  }
  items.push(price);
}
alert("Your items and their values are " + items);
