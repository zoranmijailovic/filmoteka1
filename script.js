let total = 0;
function addToCart(element) {
  let mainEl = element.closest('.single-item');
  let name = mainEl.querySelector('h3').innerText;
  let price = mainEl.querySelector('.price').innerText;
  price = price.substring(1);
  price = parseInt(price);
  let ispis = document.querySelector('.cart-items');
  
  if(price > 0) {
    total += price;
    ispis.innerHTML += `<div class="cart-single-item">
                          <h3>${name}</h3>
                          <p>cena filma je: <span>$${price}</span></p>
                          <button onclick="ukloni(this)" class="remove-item">ukloni</button>
                        </div>`;

    document.querySelector('.total').innerText = `ukupna cena filmova je $${total}`;
    element.innerText = 'dodato';
    element.setAttribute('disabled', 'true');
  }
}
function ukloni(element) {
  let mainEl = element.closest('.cart-single-item');
  let name = mainEl.querySelector('h3').innerText;
  let price = mainEl.querySelector('p span').innerText;
  let filmovi = document.querySelector('.single-item');
  price = price.substring(1);
  price = parseInt(price);
  total -= price;
  document.querySelector('.total').innerText = `ukupna cena filmova je $${total}`;
  mainEl.remove();

   

  

}