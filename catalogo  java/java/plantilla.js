const datosproductos = [
    {
        nombre: "Producto 1",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/11.jpg",

    },
    {
        nombre: "Producto 2",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/10.jpg",

    },
    {
        nombre: "Producto 3",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/9.jpg",

    },
    {
        nombre: "Producto 4",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/1.jpg",

    },





];

//const f1 = "";
//const p1 = "" = document.getElementById("app").innerHTML 
//= `<h1>esto es un texto de y una operacion {13+5}</h1>`;

const ficha1 = `
<article class="card">
<h3>${datosproductos.nombre}</h3>
<img src="${datosproductos.imagen}" alt="">
<p>${datosproductos.descriopcion}</p>
<p>${datosproductos.precio}</p>


<a href="" class="cta">Comprar</a>
</article>`;

function plantilla(datosproductos) {
    return  `
<article class="card">
<h3>${datosproductos.nombre}</h3>
<img src="${datosproductos.imagen}" alt="">
<p>${datosproductos.descriopcion}</p>
<p>${datosproductos.precio}</p>


<a href="" class="cta">Comprar</a>
</article>`;
    
    
    
}





const p2 =document.getElementById("app").innerHTML = 
`  
${datosproductos.map(plantilla).join("")}<p clsas="presio">son: ${datosproductos.length}
productos que se han actualizados en el catalogo.</p>
<p class="cantidad">verificar las actualizaciones periodicamente !!!</p>
<br>`;

