// function selectUnselect(){
//     const optionButton = document.querySelector(".optionButton")
//     optionButton.classList.toggle(".optionButton")
// }
let itemsSelected = 0;
let mainCourse;
let beverage;
let dessert;

function selectMainCourse(element) {

    const selected = document.querySelector(".mainCourse .optionBox")

    if(selected != null){
        selected.classList.remove("optionSelected")
    }else{
        
        itemsSelected = itemsSelected + 1
    }
    
    element.classList.add("optionSelected")
    
    
    validateSelection(); 
    
}

function selectBeverage(element, selectedBeverage) {

    const selected = document.querySelector(".beverage .optionSelected")

    if(selected != null){
        selected.classList.remove("optionSelected")
    }else{
        
        itemsSelected = itemsSelected + 1

    }

    element.classList.add("optionSelected")
    
    
    validateSelection();

    
}

function selectDessert(element, selectedDessert) {

    const selected = document.querySelector(".dessert .optionSelected")


    if(selected != null){
        selected.classList.remove("optionSelected")
    }else{
        
        itemsSelected = itemsSelected + 1

    }

    element.classList.add("optionSelected")
    
    
    validateSelection();

    
}

function validateSelection (){
    const enableDisable = document.querySelector("button")
    const botao = document.querySelector(".purchaseButton")
    if(itemsSelected === 3){
        botao.classList.remove("buttonDisabled")
        enableDisable.innerHTML = "Fechar pedido"
        
    }else{
        botao.classList.add("buttonDisabled")
        enableDisable.innerHTML = "Selecione 3 itens para fechar o pedido"
    }
}


