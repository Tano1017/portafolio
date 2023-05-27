
let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
   'use strict';
    menu.classList.toggle('mostrar');
});



window.addEventListener('load',async function(){
    let items = await fetch('/items.json');
    items = await items.json();
    const shop = document.getElementById('shop');
    console.log(items);
    items.forEach(item => {
    shop.innerHTML += `
    <div class="item">
        <figure>
            <img src="${item.img}" alt="camisaAAA" />
        </figure>
        <div class="info-product">
            <h2>${item.nombre} </h2>
            <p class="price">${item.precio} </p>
            <button>Añadir al carrito</button>
        </div>
    </div>
    `;
    });

});