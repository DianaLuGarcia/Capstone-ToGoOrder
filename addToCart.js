

let addItemId = 0;
let cartMath = document.querySelector('.cart-math')
let cart = [];

function addToCart (item){
cart.push(item);
disCart();
disPrice();
}

function disCart (){
let cartItems = document.getElementById('title');
//clears items in cart when adding new (to avoid duplicates)
cartItems.innerHTML = "";

for ( i=0; i< cart.length; i++){

    //places items to cart on click
let item = cart[i];
    let selectedItem = document.createElement('div');
    let img = document.createElement('img');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId)
    img.setAttribute('src',item.children[0].currentSrc)

    //adds menu item title to cart
    let title = document.createElement('div');
    title.innerText = item.children[1].innerText;

    //adds menu item quantity to cart
    let label = document.createElement('div');
    let select = document.createElement('span');
    label.innerText = item.children[2].children[0].innerText;
    select.innerText = item.children[2].children[1].value;

    //adds delete button to cart
    let delBtn = document.createElement('Button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onClick','del('+addItemId+')');

    label.append(select);
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
    }
}

function disPrice (){
    let subtotal = 0;
    for(i=0; i<cart.length; i++){
        subtotal += (+cart[i].getAttribute("name"));
    }
    cartMath.innerHTML = "";
    let h1 = document.createElement('h1');
    h1.innerText = `Subtotal: $ ${subtotal}`
    cartMath.append(h1);
    console.log(subtotal);

}

//find index of item and splice to delete
function del(item){
    document.getElementById(item).remove();
}
