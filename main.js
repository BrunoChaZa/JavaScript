const BBDD = [
    {
      id: 1,  
      nombre: "fideos",
      img: "./assets/img/fideos.jpg",
      precio: 130,
      cantidad: 1
    },
    {
      id: 2,   
      img: "./assets/img/galletitas.jpg",
      nombre: "galletitas",
      precio: 110,
      cantidad: 1
    },
    {
        id: 3, 
        img: "./assets/img/gaseosa.jpg",
      nombre: "gaseosa",
      precio: 150,
      cantidad: 1 
    },
    {
        id: 4, 
        img : "./assets/img/leche.jpg",
      nombre: "leche",
      precio: 200,
      cantidad: 1
    },
    {
        id: 5,
        img : "./assets/img/caramelos.jpg",
      nombre: "caramelo de menta",
      precio: 10,
      cantidad: 1
    },
    {
        id: 6,
        img : "./assets/img/cerveza.jpg",
      nombre: "cerveza",
      precio: 320,  
      cantidad: 1
    }
  ];



  const carrito = [];

  function crearCard(){

    const tienda = document.getElementById("tienda");

    BBDD.forEach((p) => {
      let productos = document.createElement("div");
      productos.classList.add("containerProductos");


      productos.innerHTML = ` 
            
      <div class="card" style="width: 18rem;">
      <img src="${p.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">Precio:${p.precio}</p>
        <button class="btn btn-primary" id="${p.id}">Agregar al carrito</button>
      </div>
    </div
      `

      tienda.appendChild(productos)


      productos.querySelector('button').addEventListener('click',()=>{
        AgregarProductoAlCarrito(p.id);
        

      })
        
    })
  }
  crearCard();

  function AgregarProductoAlCarrito(id) {
    

    let producto = BBDD.find(producto => producto.id === id);
    
    let productoEnCarrito = carrito.find(producto => producto.id === id);

    if(productoEnCarrito){

      productoEnCarrito.cantidad++;
      console.log(carrito);
    }else{
      producto.cantidad = 1;
      carrito.push(producto);

      console.log(carrito); 
    }
    
  }
























































