// open & close cart
const cartIcon = document.querySelector('#cart_icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('#cart_close');

cartIcon.addEventListener('click', () =>{
    cart.classList.add('active');
} )
closeCart.addEventListener('click', () =>{
    cart.classList.remove('active');
} )
/
function update() {
    addEvents()
    updateTotal()
}


// when the document is ready
document.addEventListener('DOMContentLoaded', loadFood);
function loadFood() {
    loadContent()
} 

function loadContent() {
    let btnRemove =document.querySelectorAll('.cart_remove')
    btnRemove.forEach((btn) =>{
btn.addEventListener('click', removeItem)
    });
    // ============product item change==========
    let qtyElements = document.querySelectorAll('.cart_quantity')
    qtyElements.forEach((input) =>{
        input.addEventListener('change', changeQty)
    }); 
  
 let cartBtns = document.querySelectorAll('.add_cart')
   cartBtns.forEach((btn) =>{
    btn.addEventListener('click', addCart)
}); 
}
// remove item
function removeItem() {
    if (confirm('Are your sure to remove')) {
        this.parentElement.remove()
    }
let cartQuantity_input = document.querySelectorAll('.cart_quantity');
cartQuantity_input.forEach(input =>{
input.addEventListener('change', handle_changeItemQuantity)
})

}

// change quantity //
function changeQty() {
 if (isNaN(this.value) || this.value<1 ) {
    this.value = 1
 }  
 this.value = Math.floor(this.value);
 update();
}

function updateTotal() {
    let cartBoxes = document.querySelectorAll('.cart_box');
    const totalElements = cart.querySelectorAll('.total_price');
    let total = 0;
    cartBoxes.forEach((btn) =>{
let priceElement = cartBox.querySelector('.cart_price');
let price = parseFloat(priceElement.innerHTML.replace("$", ""));
   let quantity = cartBox.querySelector('.cart_quantity').value;
   total += price*quantity;

    })
    totalElements.innerHTML = '$' + total;
}