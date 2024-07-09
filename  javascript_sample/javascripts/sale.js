const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const selectedOption = priceElement.options[priceElement.selectedIndex];
  const name = selectedOption.text;
  const price = parseInt(selectedOption.dataset.price);
  const number = parseInt(numberElement.value);
  let purchase = {
    name: name,
    price: price,
    number: number,
  };
  purchases.push(purchase);
  window.alert(`Added to order:\n${number} x ${name} (${price} yen each)\n\n${display()}\nSubtotal: ${subtotal()} yen`);
}

function display() {
  let string = "Order details:\n";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].number} x ${purchases[i].name} (${purchases[i].price} yen each)\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`Subtotal: ${sum} yen\nShipping charge: ${postage} yen\nTotal: ${sum + postage} yen\n\n${display()}`);
  purchases = [];
  priceElement.value = "0";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum >= 3000) {
    return 0;
  } else if (sum >= 2000) {
    return 250;
  } else {
    return 500;
  }
}