import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quntaty = 0;
  for (const product of cart) {
    quntaty = quntaty + product.quntaty;
    total = total + product.price * product.quntaty;
    shipping = shipping + product.shipping;
  }
  const tex = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tex);
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quntaty}</p>
      <p>Total price:$ {total} </p>
      <p>Total Shipping:${shipping} </p>
      <p>Tax:${tex} </p>
      <h5>Grand Total:${grandTotal.toFixed(2)} </h5>
    </div>
  );
};

export default Cart;
