

let addItemId = 0;

const calculateTax = subtotal => {
    const tax = subtotal * 0.13;
    const formattedTax = tax.toFixed(2);
    return formattedTax;
  };

  const calculateTotal = subtotal => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

function addToCart (item){

    //add image to cart
    let selectedItem = document.createElement('div');
    let img = document.createElement('img');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId)
    img.setAttribute('src',item.children[0].currentSrc)

    //adds menu item title to cart
    let title = document.createElement('div');
    title.innerText = item.children[1].innerText;

    //adds menu item price to cart
    let price = document.createElement('div');
    price.innerText = item.children[2].innerText;

    //adds menu item quantity to cart
    let label = document.createElement('div');
    let select = document.createElement('span');
    label.innerText = item.children[2].children[0].innerText;
    select.innerText = item.children[2].children[1].value;

    //adds delete button to cart
    let delBtn = document.createElement('Button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onClick','del('+addItemId+')'); //what



    let cartItems = document.getElementById('title');
    label.append(select);
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(price);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}

function del(item){
    document.getElementById(item).remove();
}

console.log(datetime)