// console.log("running");
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "RUFUS",
        tag: "rufus",
        price: 8500.99,
        inCart:0
    },
    {
        name: "LUPUS",
        tag: "lupus",
        price: 8500.99,
        inCart:0
    },
    {
        name: "SIMENSIS",
        tag: "simensis",
        price: 8500.99,
        inCart:0
    },
    {
        name: "PROCESSADOR",
        tag: "processador",
        price: 3101.10,
        inCart:0
    },
    {
        name: "PLACA DE VIDEO",
        tag: "placaVideo",
        price: 1679.69,
        inCart:0
    },
    {
        name: "MEMORIA RAM",
        tag: "memoriaRam",
        price: 351.31,
        inCart:0
    },
    {
        name: "PLACA MAE",
        tag: "placaMae",
        price: 3914.25,
        inCart:0
    },
    {
        name: "HDD",
        tag: "hdd",
        price: 1422.20,
        inCart:0
    },
    {
        name: "SDD",
        tag: "sdd",
        price: 227.99,
        inCart:0
    },
]
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers; 
    }
}
function cartNumbers(products){   
    let productNumbers = localStorage.getItem("cartNumbers");   
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }   else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }  
    setItems(products) 
}
function setItems (products){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[products.tag] == undefined){
            cartItems ={
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else{
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
    }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
} 

function totalCost(products){
    // console.log("the product price is", products.price);
    let cartCost = localStorage.getItem("totalCost");
    
    console.log("custo do meu carrinho", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    
    console.log(cartItems);
    if (cartItems && productContainer ){
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += 
            `<div class+"product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./img/${item.tag}.png"
                <span>${item.name}</span>
             </div>   
            `
        });
    }
}

onLoadCartNumbers();
displayCart();