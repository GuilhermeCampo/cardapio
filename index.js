const menu = document.getElementById("menu");
const modalContainer = document.getElementById("modal-container");
const cartBtn = document.getElementById("cart-btn");
const cartItemContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkOut = document.getElementById("modal-finish-btn");
const closeModalBtn = document.getElementById("modal-close-btn");
const cartCounter = document.getElementById("cart-count");
const address = document.getElementById("address");
const adressWarn = document.getElementById("address-warn");

let cart = [];

// ABIR E FECHAR O MODAL

cartBtn.addEventListener("click", function () {
  modalContainer.style.display = "flex";
  updateCartModal();
});

closeModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

menu.addEventListener("click", function (event) {
  let parentButton = event.target.closest(".add-to-cart-btn");
  if (parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parseFloat(parentButton.getAttribute("data-price"));
    addToCart(name, price);
  }
});

//  ADICIONAR AO CARRINHO
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name,
      price,
      quantity: 1,
    });
  }
  updateCartModal();
}

// ATUALIZAR O CARRINHO

function updateCartModal() {
  let total = 0;

  cartItemContainer.innerHTML = "";
  cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item-element");
    cartItemElement.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <p style="font-weight:700;">${item.name} </p>
                    <p>Quantidade: ${item.quantity}</p>
                    <p>Valor: R$${item.price.toFixed(2)}</p>
                </div>

                
                    <div>
                        <button class="remove-from-cart-btn" data-name="${item.name}">
                            remover
                        </button>
                    </div>
             
            
            
            </div>

        `;

    total += item.price * item.quantity;

    cartItemContainer.appendChild(cartItemElement);
    
    
    
    })
 
   

 
  cartTotal.innerHTML=total.toLocaleString("pt-BR",{ 
    style: "currency",
    currency: "BRL",
    
  })
  cartCounter.innerHTML= cart.length;
}


// FUNÇÃO REMOVER DO CARRINHO

cartItemContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")

        removeItemCart(name);
    } 
})
function removeItemCart(name){
    const index = cart.findIndex(item => item.name===name);
    if(index!== -1){
        const item = cart[index];
        if(item.quantity>1){
            item.quantity-=1
            updateCartModal()
            return;
        } 
        cart.splice(index, 1);
        updateCartModal();
    }
}