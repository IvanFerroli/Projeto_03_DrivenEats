// function selectUnselect(){
//     const optionButton = document.querySelector(".optionButton")
//     optionButton.classList.toggle(".optionButton")
// }
let itemsSelected = 0;
let mainCourse;
let beverage;
let dessert;

function selectMainCourse(element) {

    const selected = document.querySelector(".main-course .option-selected")

    if(selected != null){
        selected.classList.remove("option-selected")
    }else{
        
        itemsSelected = itemsSelected + 1
    }
    
    element.classList.add("option-selected")
    
    
    validateSelection(); 
    
}

function selectBeverage(element, selectedBeverage) {

    const selected = document.querySelector(".beverage .option-selected")

    if(selected != null){
        selected.classList.remove("option-selected")
    }else{
        
        itemsSelected = itemsSelected + 1

    }

    element.classList.add("option-selected")
    
    
    validateSelection();

    
}

function selectDessert(element, selectedDessert) {

    const selected = document.querySelector(".dessert .option-selected")


    if(selected != null){
        selected.classList.remove("option-selected")
    }else{
        
        itemsSelected = itemsSelected + 1

    }

    element.classList.add("option-selected")
    
    
    validateSelection();

    
}

function validateSelection (){
    const enableDisable = document.querySelector("purchase-button")
    if(itemsSelected === 3){
        botao.classList.remove("button-disabled")
        enableDisable.innerHTML = "Fechar pedido"
        
    }else{
        botao.classList.add("button-disabled")
        enableDisable.innerHTML = "Selecione 3 itens para fechar o pedido"
    }
}


