const menu = document.getElementById('menu')
const modalContainer = document.getElementById('modal-container')
const cartBtn = document.getElementById('cart-btn')
const cartItemContainer = document.querySelector('div#cart-items')
const total = document.getElementById('cart-total')
const checkOut = document.getElementById('modal-finish-btn')
const closeModalBtn = document.getElementById('modal-close-btn')
const cartCounter = document.getElementById('cart-count')
const address = document.getElementById('address')
const adressWarn = document.getElementById('address-warn')



cartBtn.addEventListener("click", function(){
    modalContainer.style.display = 'flex'
})

closeModalBtn.addEventListener("click", function(){
    modalContainer.style.display = 'none'
})

modalContainer.addEventListener('click', function(){
    modalContainer.style.display='none'
})