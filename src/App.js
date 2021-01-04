import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  // Crear listado de productos
  const [products, setProducts] = useState([
    { id: 1, name: "Dune", price: 30 },
    { id: 2, name: "La historia interminable", price: 18 },
    { id: 3, name: "Cuentos de Terramar", price: 25 },
    { id: 4, name: "Wes Marino 1: Bajo la piel de la ciudad", price: 10 },
  ]);
  // State para un carrito de compras
  const [cart, setCart] = useState([]);

  //Obtener fecha
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header headerTitle="Tienda virtual" />
      <h1>Lista de Productos</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          products={products}
          setCart={setCart}
        />
      ))}
      <Cart cart={cart} setCart={setCart} />
      <Footer date={date} />
    </Fragment>
  );
}

export default App;
