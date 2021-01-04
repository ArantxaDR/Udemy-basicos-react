import React from "react";
import "../cart.css";
import Product from "./Product";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <h2>Tus compras</h2>
      {cart.length === 0 ? (
        <p>El carro está vacío</p>
      ) : (
        cart.map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
