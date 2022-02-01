let itemsSelected = 0;
let mainCourse;
let beverage;
let dessert;

function selectMainCourse(element) {
  const selected = document.querySelector(".main-course .option-selected");

  if (selected != null) {
    selected.classList.remove("option-selected");
  } else {
    itemsSelected = itemsSelected + 1;
  }

  element.classList.add("option-selected");

  validateSelection();
  console.log(itemsSelected);
}

function selectBeverage(element, selectedBeverage) {
  const selected = document.querySelector(".beverage .option-selected");

  if (selected != null) {
    selected.classList.remove("option-selected");
  } else {
    itemsSelected = itemsSelected + 1;
  }

  element.classList.add("option-selected");

  validateSelection();
  console.log(itemsSelected);
}

function selectDessert(element, selectedDessert) {
  const selected = document.querySelector(".dessert .option-selected");

  if (selected != null) {
    selected.classList.remove("option-selected");
  } else {
    itemsSelected = itemsSelected + 1;
  }

  element.classList.add("option-selected");

  validateSelection();
  console.log(itemsSelected);
}

function validateSelection() {
  console.log(itemsSelected);
  const purchaseButton = document.querySelector(".purchase-button");
  if (itemsSelected === 3) {
    purchaseButton.classList.remove("button-disabled");
    purchaseButton.innerTEXT = "Fechar pedido";
  } else {
    purchaseButton.classList.add("button-disabled");
    purchaseButton.innerTEXT = "Selecione 3 itens para fechar o pedido";
  }
}
