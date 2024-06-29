import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
